// ===== CORE HELPER FUNCTIONS =====

/**
 * Selects a single element from the DOM.
 * @param {string} selector - The CSS selector.
 * @param {Element} [parent=document] - The parent element to search within.
 * @returns {Element|null} The selected element or null if not found.
 */
const $ = (selector, parent = document) => parent.querySelector(selector);

/**
 * Selects multiple elements from the DOM.
 * @param {string} selector - The CSS selector.
 * @param {Element} [parent=document] - The parent element to search within.
 * @returns {NodeListOf<Element>} A NodeList of the selected elements.
 */
const $$ = (selector, parent = document) => parent.querySelectorAll(selector);

/**
 * Adds an event listener to an element.
 * @param {Element} element - The element to attach the event to.
 * @param {string} event - The event type (e.g., 'click').
 * @param {Function} callback - The function to execute when the event occurs.
 */
const on = (element, event, callback) => {
    if (element) {
        element.addEventListener(event, callback);
    }
};

/**
 * Toggles a class on an element.
 * @param {Element} element - The element to toggle the class on.
 * @param {string} className - The class name to toggle.
 */
const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

/**
 * Adds a class to an element.
 * @param {Element} element - The element to add the class to.
 * @param {string} className - The class name to add.
 */
const addClass = (element, className) => {
    if (element) {
        element.classList.add(className);
    }
};

/**
 * Removes a class from an element.
 * @param {Element} element - The element to remove the class from.
 * @param {string} className - The class name to remove.
 */
const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

/**
 * Creates a DOM element with specified attributes and content.
 * @param {string} tag - The HTML tag for the element.
 * @param {object} [attributes={}] - An object of attributes to set on the element.
 * @param {string|Node|Array<string|Node>} [content=\'\'] - The content to append to the element.
 * @returns {Element} The created element.
 */
const createElement = (tag, attributes = {}, content = \'\') => {
    const el = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });

    if (Array.isArray(content)) {
        content.forEach(item => {
            if (typeof item === \'string\') {
                el.appendChild(document.createTextNode(item));
            } else {
                el.appendChild(item);
            }
        });
    } else if (typeof content === \'string\') {
        el.innerHTML = content;
    } else if (content instanceof Node) {
        el.appendChild(content);
    }

    return el;
};

/**
 * Debounces a function to limit the rate at which it gets called.
 * @param {Function} func - The function to debounce.
 * @param {number} [delay=300] - The debounce delay in milliseconds.
 * @returns {Function} The debounced function.
 */
const debounce = (func, delay = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

/**
 * Throttles a function to ensure it's called at most once in a specified time period.
 * @param {Function} func - The function to throttle.
 * @param {number} [limit=300] - The throttle time limit in milliseconds.
 * @returns {Function} The throttled function.
 */
const throttle = (func, limit = 300) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Fetches data from a URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} A promise that resolves with the fetched data.
 */
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(\'Error fetching data:\', error);
        return null;
    }
};

/**
 * Generates a random integer within a specified range.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} The random integer.
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Formats a number with commas as thousands separators.
 * @param {number} num - The number to format.
 * @returns {string} The formatted number string.
 */
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, \',\');
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
const capitalize = (str) => {
    if (typeof str !== \'string\' || str.length === 0) {
        return \'\';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Delays execution for a specified amount of time.
 * @param {number} ms - The delay in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the delay.
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


