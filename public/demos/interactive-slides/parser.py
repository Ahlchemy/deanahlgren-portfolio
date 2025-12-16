"""
Python script to parse Markdown content from learning_content_draft.md
and convert it into a JavaScript courseData object structure.
"""
import re
import json
import sys

def escape_html(text):
    """Basic HTML escaping for content."""
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;').replace("'", '&#39;')

def parse_md_to_course_data(md_content):
    modules = []
    current_module = None
    current_page = None
    page_content_html_parts = []
    in_list = False

    lines = md_content.replace('\\n', '\n').split('\n') # Handle potential double escapes from file_read

    for line_raw in lines:
        line = line_raw.strip()

        if not line:
            if in_list and current_page: # Close list if it was open and we are in a page
                page_content_html_parts.append("</ul>")
                in_list = False
            continue

        module_match = re.match(r"### Module (\d+): (.*)", line)
        # Regex for page: **1.2 Key Problems in Computer Vision:** or **1.2 Key Problems...**
        page_match = re.match(r"\*\*\s*(\d+\.\d+)\s+(.*?)\s*\*\*", line)

        if module_match:
            if current_module and current_page:
                if in_list: page_content_html_parts.append("</ul>")
                current_page["content"] = "".join(page_content_html_parts)
                current_module["pages"].append(current_page)
                in_list = False # Reset for new page
            if current_module:
                modules.append(current_module)

            module_id = int(module_match.group(1))
            module_title = escape_html(module_match.group(2).strip())
            current_module = {"id": module_id, "title": module_title, "pages": []}
            current_page = None
            page_content_html_parts = []
            in_list = False

        elif page_match and current_module:
            if current_page: # Save previous page if exists
                if in_list: page_content_html_parts.append("</ul>")
                current_page["content"] = "".join(page_content_html_parts)
                current_module["pages"].append(current_page)
                in_list = False # Reset for new page

            page_id_str = page_match.group(1) # e.g., "1.1"
            page_title_text = page_match.group(2).strip()
            # Remove trailing colon if present from titles like "Visual Analogy (The Developing Child):"
            if page_title_text.endswith(':'):
                page_title_text = page_title_text[:-1]
            page_title = escape_html(page_title_text)
            current_page = {"id": page_id_str, "title": page_title, "content": ""} # id will be updated later
            page_content_html_parts = [f"<h2>{page_title}</h2>"]
            in_list = False
        
        elif current_page: # Accumulate content for the current page
            analogy_match = re.match(r"\*\s*\*\*(.*?Analogy.*?):\*\*\s*(.*)", line) # For bolded analogy titles
            list_item_match = re.match(r"\*\s+(.*)", line) # General list items (allow for just one space after *)

            if analogy_match:
                if not in_list:
                    page_content_html_parts.append("<ul>")
                    in_list = True
                title = escape_html(analogy_match.group(1).strip())
                text = escape_html(analogy_match.group(2).strip())
                page_content_html_parts.append(f"<li><strong>{title}:</strong> {text}</li>")
            elif list_item_match:
                if not in_list:
                    page_content_html_parts.append("<ul>")
                    in_list = True
                text = escape_html(list_item_match.group(1).strip())
                # Handle sub-bullets if necessary, for now, treat as flat list items
                page_content_html_parts.append(f"<li>{text}</li>")
            else: # Regular paragraph
                if in_list:
                    page_content_html_parts.append("</ul>")
                    in_list = False
                page_content_html_parts.append(f"<p>{escape_html(line)}</p>")

    # Finalize last page and module
    if current_module and current_page:
        if in_list: page_content_html_parts.append("</ul>")
        current_page["content"] = "".join(page_content_html_parts)
        current_module["pages"].append(current_page)
    if current_module:
        modules.append(current_module)

    # Reset page IDs to be sequential 1-based integers for compatibility with original JS
    for mod in modules:
        # Ensure module title is not empty
        if not mod["title"]: mod["title"] = f"Module {mod['id']}"
        for i, page_data in enumerate(mod["pages"]):
            page_data["id"] = i + 1 # Make page IDs 1-based integers
            if not page_data["title"]: page_data["title"] = f"Page {page_data['id']}"
            if not page_data["content"].strip(): # Ensure content is not empty
                page_data["content"] = f"<p>Content for {page_data['title']} goes here.</p>"

    # Add a welcome module/page if no modules were parsed (e.g., empty MD)
    if not modules:
        modules.append({
            "id": 1, "title": "Welcome", "pages": [{
                "id": 1, "title": "Course Introduction", 
                "content": "<p>Welcome to the course. The content is being loaded. Please select a module to begin if available, or check back shortly.</p>"
            }]
        })
    else:
        # Ensure each module has at least one page
        for mod in modules:
            if not mod["pages"]:
                mod["pages"].append({
                    "id": 1, "title": "Module Introduction",
                    "content": f"<p>Welcome to {mod['title']}. Select a page to learn more.</p>"
                })

    return {"modules": modules}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parser.py <path_to_markdown_file>", file=sys.stderr)
        # Output a default structure if no input file to prevent JS errors
        default_data = {"modules": [{
            "id": 1, "title": "Error", "pages": [{
                "id": 1, "title": "Content Loading Error", 
                "content": "<p>Could not load course content. Markdown file path was not provided to parser.</p>"
            }]
        }]}
        print(f"const courseData = {json.dumps(default_data, indent=4)};")
        sys.exit(1)

    input_file_path = sys.argv[1]
    try:
        with open(input_file_path, 'r', encoding='utf-8') as f:
            md_file_content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {input_file_path}", file=sys.stderr)
        error_data = {"modules": [{
            "id": 1, "title": "Error", "pages": [{
                "id": 1, "title": "File Not Found", 
                "content": f"<p>Could not load course content. The file {escape_html(input_file_path)} was not found.</p>"
            }]
        }]}
        print(f"const courseData = {json.dumps(error_data, indent=4)};")
        sys.exit(1)

    parsed_data = parse_md_to_course_data(md_file_content)
    print(f"const courseData = {json.dumps(parsed_data, indent=4)};")

