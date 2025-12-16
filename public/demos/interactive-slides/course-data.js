const courseData = {
    "modules": [
        {
            "id": 1,
            "title": "Foundations of Computer Vision",
            "pages": [
                {
                    "id": 1,
                    "title": "What is Computer Vision?",
                    "content": "<h2>What is Computer Vision?</h2><p>Computer Vision (CV) is a field of artificial intelligence that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs \u2014 and take actions or make recommendations based on that information. If AI enables computers to think, computer vision enables them to see, observe, and understand.</p><ul><li><strong>Visual Analogy (The Developing Child):</strong> Imagine teaching a young child to understand the world around them. Initially, they just perceive light and shapes. Gradually, they learn to identify objects, understand where they are, how they relate to each other, and even imagine new scenes. Computer vision aims to give machines this same developmental journey of visual understanding.</li></ul>"
                },
                {
                    "id": 2,
                    "title": "Key Problems in Computer Vision",
                    "content": "<h2>Key Problems in Computer Vision</h2><ul><li>**Image Classification:** Assigning a label to an entire image.</li><li><strong>Analogy (Naming Objects):</strong> This is like a child learning to say &quot;cat&quot; when they see a picture of a cat, or &quot;car&quot; when they see a car. The system looks at the whole image and decides on a single category that best describes it.</li><li>**Object Detection:** Identifying and locating one or more objects within an image, typically by drawing bounding boxes around them.</li><li><strong>Analogy (Pointing and Naming):</strong> The child now not only says &quot;cat&quot; but also points to where the cat is in a complex scene. The system finds specific items and marks their location.</li><li>**Instance Segmentation:** Identifying each individual instance of an object at the pixel level.</li><li><strong>Analogy (Coloring Book Precision):</strong> Imagine the child meticulously coloring *each* flower in a drawing of a garden, staying perfectly within the lines for every single petal and leaf, and distinguishing one flower from another even if they are the same type. Each pixel belonging to an object instance is identified.</li><li>**Semantic Segmentation:** Assigning a class label to each pixel in an image.</li><li><strong>Analogy (Categorizing Regions):</strong> This is like the child looking at a landscape photo and labeling all the pixels that are part of the &quot;sky,&quot; all pixels that are &quot;grass,&quot; and all pixels that are &quot;road,&quot; without necessarily distinguishing between two different sheep if they are both in the &quot;sheep&quot; category.</li><li>**3D Reconstruction:** Recovering the three-dimensional structure of a scene from 2D images or other sensor data.</li><li><strong>Analogy (Understanding Depth and Form):</strong> The child learns that some toys are close and others are far away, and that objects have volume and shape, not just flat appearances. The system builds a 3D model of the environment.</li><li>**Image Generation:** Creating new, realistic images from scratch or based on certain inputs.</li><li><strong>Analogy (Imaginative Drawing):</strong> The child starts drawing pictures from their own imagination, creating scenes they&#39;ve never directly observed but understand from their learned concepts. The system synthesizes novel visual content.</li></ul>"
                }
            ]
        },
        {
            "id": 2,
            "title": "The Deep Learning Revolution in Computer Vision",
            "pages": [
                {
                    "id": 1,
                    "title": "The ImageNet Challenge: A Catalyst for Change",
                    "content": "<h2>The ImageNet Challenge: A Catalyst for Change</h2><p>The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) was an annual competition that played a pivotal role in advancing computer vision. It provided a large, standardized dataset of millions of labeled images across thousands of object categories.</p><ul><li><strong>Visual Analogy (The Global Vision Olympics):</strong> Think of the ImageNet competition as a global Olympics for computer vision systems. Teams from around the world competed to build the &quot;smartest eye&quot; \u2013 the system that could most accurately recognize objects in a vast and diverse collection of images. Traditional methods were like athletes hitting a performance plateau.</li></ul>"
                },
                {
                    "id": 2,
                    "title": "AlexNet: The Breakthrough Moment (2012)",
                    "content": "<h2>AlexNet: The Breakthrough Moment (2012)</h2><p>In 2012, a deep convolutional neural network (CNN) called AlexNet, developed by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton, dramatically outperformed all previous non-deep learning approaches in the ImageNet competition. This event is widely considered the tipping point for deep learning&#39;s dominance in the field.</p><ul><li><strong>Analogy (The First True Automobile vs. Horse-Drawn Carriages):</strong> Traditional computer vision methods were like well-refined horse-drawn carriages \u2013 effective to a point, but with inherent limitations. AlexNet was like the first truly practical automobile. It was a fundamentally different and more powerful technology that suddenly left the carriages far behind, halving the error rate and astonishing the research community.</li></ul>"
                },
                {
                    "id": 3,
                    "title": "Architectural Advancements: Building Deeper and Smarter Networks",
                    "content": "<h2>Architectural Advancements: Building Deeper and Smarter Networks</h2><p>Following AlexNet, a series of innovations in neural network architectures led to even more significant performance gains:</p><ul><li>**VGGNet (2014):** Showed that depth (more layers) was crucial. Used very small (3x3) convolutional filters stacked on top of each other.</li><li><strong>Analogy (Taller Skyscrapers, Simpler Bricks):</strong> VGGNet was like realizing you could build much taller and more impressive skyscrapers (deeper networks) by using a very consistent and simple type of brick (small filters) but many, many layers of them.</li><li>**GoogLeNet / Inception (2014):** Introduced &quot;Inception modules&quot; that performed multiple different types of convolutions and pooling in parallel within the same layer, allowing the network to capture features at various scales. It was also more computationally efficient.</li><li><strong>Analogy (The Swiss Army Knife Layer):</strong> An Inception module is like a layer in the network that has a Swiss Army knife \u2013 it has multiple tools (different filter sizes, pooling) it can use simultaneously to analyze the input, picking the best combination for the task at hand, making it versatile and efficient.</li><li>**ResNet / Residual Networks (2015):** Enabled the training of extremely deep networks (over 150 layers) by introducing &quot;skip connections&quot; or &quot;shortcuts.&quot; These connections allowed gradients to flow more easily through the network, mitigating the vanishing gradient problem.</li><li><strong>Analogy (Express Lanes on a Highway):</strong> Training very deep networks was like trying to send a message down a very long, winding local road where the signal gets weaker and weaker (vanishing gradients). ResNet&#39;s skip connections are like building express lanes or direct highways that bypass many local stops. This allows the signal (and learning) to travel much further and faster through the network without degrading, enabling much deeper architectures.</li></ul>"
                },
                {
                    "id": 4,
                    "title": "Key Drivers of Progress",
                    "content": "<h2>Key Drivers of Progress</h2><ul><li>**Large Datasets (e.g., ImageNet):** Deep learning models are data-hungry. The availability of massive, labeled datasets was crucial.</li><li><strong>Analogy (Fuel for the Engine):</strong> Large datasets are the high-octane fuel for these powerful deep learning engines. The more high-quality fuel you have, the better and further the engine can perform.</li><li>**GPU Acceleration:** Training deep neural networks is computationally intensive. The parallel processing power of GPUs made training these models feasible in a reasonable timeframe.</li><li><strong>Analogy (Supercharged Computing Power):</strong> GPUs are like superchargers for the computational engine, allowing the massive number of calculations required for training deep networks to be performed much faster than with traditional CPUs.</li></ul>"
                }
            ]
        },
        {
            "id": 3,
            "title": "Essential Techniques in Modern Computer Vision",
            "pages": [
                {
                    "id": 1,
                    "title": "Data Augmentation: Getting More from Your Data",
                    "content": "<h2>Data Augmentation: Getting More from Your Data</h2><p>Data augmentation involves creating new, modified versions of existing training data to artificially expand the dataset&#39;s size and diversity. Common techniques include rotations, scaling, cropping, flipping, and color adjustments.</p><ul><li><strong>Visual Analogy (The Creative Gardener):</strong> Imagine a gardener who has a few unique seed types (original labeled images). To create a more diverse and resilient garden (a more robust model), they don&#39;t just plant those seeds. They also slightly alter the growing conditions for some \u2013 a bit more sun here (brightness change), a slightly different angle of planting there (rotation), or grafting parts of one plant onto another (more complex augmentations). This results in a garden with a wider variety of plants (augmented data) from the initial limited seed stock, helping the overall ecosystem thrive against various challenges (improving model generalization).</li><li><strong>Everyday Analogy (The Versatile Chef):</strong> A chef with a few core ingredients (labeled images) can create a much wider menu (augmented dataset) by applying different cooking techniques: slicing differently (cropping), changing the orientation on the plate (rotation), adjusting spices (color jitter), or combining them in slightly varied ways. This makes the chef (model) better prepared for diverse customer preferences (real-world variations).</li></ul>"
                },
                {
                    "id": 2,
                    "title": "Supervised Learning: Learning with a Teacher",
                    "content": "<h2>Supervised Learning: Learning with a Teacher</h2><p>In supervised learning, the model learns from data that is fully labeled. Each input example is paired with a correct output label.</p><ul><li><strong>Visual Analogy (Apprentice Learning from a Master):</strong> Supervised learning is like an apprentice learning a craft from a master. For every task the apprentice attempts (input image), the master provides the correct outcome or identifies the object (provides the label). The apprentice learns by comparing their attempt to the master&#39;s feedback, gradually improving their skills.</li></ul>"
                },
                {
                    "id": 3,
                    "title": "Semi-Supervised Learning: Learning with Partial Guidance",
                    "content": "<h2>Semi-Supervised Learning: Learning with Partial Guidance</h2><p>Semi-supervised learning uses a combination of a small amount of labeled data and a large amount of unlabeled data. The goal is to leverage the unlabeled data to improve learning accuracy.</p><ul><li><strong>Visual Analogy (Exploring a Partially Mapped Forest):</strong> Imagine an explorer venturing into a vast forest. They have a detailed map for a small section near the entrance (labeled data), but the rest of the forest is uncharted (unlabeled data). In semi-supervised learning, the explorer uses the knowledge from the mapped section to understand general patterns of the terrain, types of trees, and animal trails. They then use this understanding to cautiously navigate and make educated guesses about the uncharted areas, gradually building a more complete picture of the entire forest. The unlabeled data helps to understand the underlying structure of the data space, even without explicit labels for every point.</li></ul>"
                }
            ]
        },
        {
            "id": 4,
            "title": "Advanced Computer Vision Tasks - A Deeper Look",
            "pages": [
                {
                    "id": 1,
                    "title": "Detection and Segmentation Revisited: The U-Net Architecture",
                    "content": "<h2>Detection and Segmentation Revisited: The U-Net Architecture</h2><p>The U-Net architecture is particularly popular for biomedical image segmentation but is widely used in other segmentation tasks. Its U-shape consists of a contracting path (encoder) to capture context and a symmetric expanding path (decoder) to enable precise localization.</p><ul><li><strong>Visual Analogy (The Archaeologist&#39;s Dig and Reconstruction):</strong> Think of a U-Net as an archaeologist meticulously excavating and then reconstructing an ancient artifact or site.</li><li>**Encoder (Digging Down):** The archaeologist first digs down, layer by layer (convolution and pooling). With each deeper layer, they get a broader, more contextual understanding of the entire site (capturing features, reducing spatial dimensions) but lose some of the fine-grained details of individual small pieces.</li><li>**Decoder (Reconstructing Up):** Once they reach the deepest understanding, they begin the reconstruction phase, carefully working their way back up (upsampling and convolution). Crucially, they use &quot;skip connections&quot; \u2013 like referring back to detailed notes and photographs taken at each level during the initial dig. These skip connections bring back the high-resolution details from the encoder path and fuse them with the contextual information from the decoder path. This allows for a precise reconstruction (segmentation map) that has both the overall understanding and the fine details correct.</li></ul>"
                },
                {
                    "id": 2,
                    "title": "3D Reconstruction: Perceiving Depth and Structure",
                    "content": "<h2>3D Reconstruction: Perceiving Depth and Structure</h2><ul><li>**LiDAR (Light Detection and Ranging):** Sends out laser pulses and measures the reflected light to determine distances and create 3D point clouds.</li><li><strong>Elemental/Natural Analogy (Bat Echolocation):</strong> LiDAR works much like a bat navigating in the dark using echolocation. The bat emits a sound pulse (LiDAR emits a laser pulse), and by listening to the echo&#39;s return time and characteristics (LiDAR measures the reflected light), it can determine the distance, size, and shape of objects in its environment, building a 3D map.</li><li>**Stereo Vision:** Uses two or more cameras at slightly different viewpoints to infer depth through triangulation, similar to human binocular vision.</li><li><strong>Everyday/Natural Analogy (Human Eyes):</strong> Hold a finger in front of your face and look at it with one eye closed, then the other. Your finger appears to shift against the background. Our brain uses this disparity between the views from our two eyes (stereo cameras) to calculate depth. The further an object, the less it shifts. Stereo vision systems do the same by finding corresponding points in the images from two cameras and triangulating their 3D position.</li><li>**Monocular Depth Estimation:** Inferring depth from a single 2D image, often using machine learning models trained on vast datasets.</li><li><strong>Everyday/Natural Analogy (The One-Eyed Artist&#39;s Perspective):</strong> An experienced artist can create a convincing illusion of depth in a 2D painting using cues like perspective (lines converging in the distance), occlusion (one object partially hiding another), shading, relative size of known objects, and texture gradients. Monocular depth estimation with neural networks is like training a system to become such an artist, learning these complex cues from millions of images and their corresponding depth information to predict depth from a new, single image.</li></ul>"
                },
                {
                    "id": 3,
                    "title": "Image Generation: Creating the Unseen",
                    "content": "<h2>Image Generation: Creating the Unseen</h2><ul><li>**PixelCNN/PixelRNN:** Autoregressive models that generate images pixel by pixel, where each new pixel is predicted based on the previously generated pixels.</li><li><strong>Everyday Analogy (Meticulous Mosaic Artist):</strong> Imagine an artist creating a large mosaic, one tiny tile (pixel) at a time. The choice of color and placement for each new tile is heavily influenced by the tiles already laid down around it. PixelCNN works similarly, sequentially building an image by predicting the next pixel based on its neighbors.</li><li>**GANs (Generative Adversarial Networks):** Consist of two networks, a Generator and a Discriminator, trained simultaneously in a competitive game.</li><li>**Generator:** Tries to create realistic images to fool the Discriminator.</li><li>**Discriminator:** Tries to distinguish between real images (from the training set) and fake images (from the Generator).</li><li><strong>Everyday/Natural Analogy (The Art Forger and the Expert Detective):</strong> A GAN is like a contest between a skilled art forger (the Generator) and an astute art detective (the Discriminator). The forger creates paintings and tries to pass them off as genuine masterpieces. The detective studies both real masterpieces and the forger&#39;s attempts, learning to spot fakes. As the detective gets better, the forger is forced to improve their technique to create even more convincing fakes. This adversarial process pushes both to become incredibly skilled, resulting in the forger producing highly realistic (generated) images.</li><li>**VAEs (Variational Autoencoders):** Learn a compressed latent representation (encoding) of the input data and then use this representation to reconstruct (decode) the original data. They are probabilistic generative models.</li><li><strong>Everyday Analogy (The Efficient Messenger and Reconstructor):</strong> Imagine needing to send a very detailed blueprint (original image) across a channel that only allows very small, coded messages (latent space &#39;z&#39;). A VAE has two parts:</li><li>**Encoder (The Efficient Coder):** This part learns to take the detailed blueprint and create the most efficient, information-rich, yet compact coded message possible.</li><li>**Decoder (The Skilled Reconstructor):** This part takes the compact coded message and learns to perfectly reconstruct the original detailed blueprint from it.</li></ul><p>The process ensures the code &#39;z&#39; captures the essential essence of the image. VAEs can then generate new images by sampling points from this learned latent space and decoding them. They are also good at tasks like image denoising \u2013 as if the coded message inherently filters out noise before reconstruction.</p>"
                }
            ]
        },
        {
            "id": 5,
            "title": "Introduction to Natural Language Processing (NLP)",
            "pages": [
                {
                    "id": 1,
                    "title": "What is NLP?",
                    "content": "<h2>What is NLP?</h2><p>Natural Language Processing (NLP) is a subfield of AI focused on enabling computers to understand, interpret, manipulate, and generate human language (text and speech) in a way that is both meaningful and useful.</p><ul><li><strong>Visual Analogy (The Universal Translator and Librarian):</strong> Think of NLP as building a sophisticated universal translator combined with an incredibly knowledgeable librarian. This system wouldn&#39;t just swap words between languages; it would understand the nuances, context, intent, and cultural implications of the text or speech. It could then summarize vast libraries of information, answer complex questions, write new texts, and converse naturally.</li></ul>"
                },
                {
                    "id": 2,
                    "title": "Key Tasks in NLP",
                    "content": "<h2>Key Tasks in NLP</h2><ul><li>**Information Retrieval (IR):** Finding relevant documents or information from a large collection based on a user&#39;s query.</li><li><strong>Analogy (The Skilled Librarian):</strong> You ask a librarian for books about</li></ul>"
                }
            ]
        }
    ]
};

// Export courseData for use in other scripts
window.courseData = courseData;
