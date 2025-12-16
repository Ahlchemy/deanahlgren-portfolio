// ===== MODULE CONTENT DEFINITIONS =====

// Extend the DataScienceCourse class with module content methods
DataScienceCourse.prototype.getModule1HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">Foundation of Data-Driven Decisions</h1>
            <h2 class="module-subtitle">From Ancient Civilizations to Modern Analytics</h2>
            <p class="module-description">
                Discover how decision-making has always been data-driven, from ancient civilizations 
                to modern business analytics. Explore the fundamental principles that connect 
                historical decision-making with today's sophisticated data science methods.
            </p>
        </div>

        <div class="module-nav">
            <div class="section-indicator">
                <div class="section-dot active" data-section="0"></div>
                <div class="section-dot" data-section="1"></div>
                <div class="section-dot" data-section="2"></div>
                <div class="section-dot" data-section="3"></div>
            </div>
        </div>

        <!-- Section 0: Ancient Decision Making -->
        <div class="section active" data-section="0">
            <div class="section-content">
                <h2 class="section-title">Ancient Decision Making</h2>
                
                <p class="section-intro">
                    Long before computers and algorithms, ancient civilizations made critical decisions 
                    based on data observation and pattern recognition. These early data scientists used 
                    systematic approaches to collect, analyze, and apply information for survival and prosperity.
                </p>

                <h3>Historical Data Collection Methods</h3>
                <p>
                    Ancient communities developed sophisticated methods for gathering and interpreting data. 
                    They observed natural patterns, tracked seasonal changes, and documented their findings 
                    for future reference. This systematic approach to data collection formed the foundation 
                    of modern analytical thinking.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Decision Type</th>
                            <th>Data Sources</th>
                            <th>Analysis Methods</th>
                            <th>Modern Parallel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Firewood Storage</strong></td>
                            <td>Weather patterns, temperature changes, seasonal indicators</td>
                            <td>Historical pattern analysis, resource assessment, consumption calculations</td>
                            <td>Inventory management systems</td>
                        </tr>
                        <tr>
                            <td><strong>Travel Planning</strong></td>
                            <td>Geography, weather predictions, seasonal factors</td>
                            <td>Route optimization, risk assessment, timing analysis</td>
                            <td>GPS navigation and travel apps</td>
                        </tr>
                        <tr>
                            <td><strong>Crop Cultivation</strong></td>
                            <td>Soil conditions, rainfall, temperature cycles</td>
                            <td>Environmental monitoring, yield prediction, timing optimization</td>
                            <td>Precision agriculture and IoT farming</td>
                        </tr>
                        <tr>
                            <td><strong>Trade Decisions</strong></td>
                            <td>Market demand, resource availability, transportation costs</td>
                            <td>Supply-demand analysis, cost-benefit calculations</td>
                            <td>Modern supply chain analytics</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Key Principles of Ancient Data Science</h3>
                <p>
                    Ancient decision-makers followed principles that remain relevant today. They understood 
                    the importance of systematic observation, pattern recognition, and evidence-based 
                    decision making. These principles formed the conceptual foundation for modern data science.
                </p>

                <div class="image-container">
                    <img src="assets/images/ancient_data_collection.jpg" alt="Ancient cuneiform tablet showing early data recording" class="section-image">
                    <p class="image-caption">
                        Ancient civilizations developed sophisticated methods for collecting and analyzing data 
                        to make critical decisions about survival and prosperity.
                    </p>
                </div>
            </div>
        </div>

        <!-- Section 1: Historical Context -->
        <div class="section" data-section="1">
            <div class="section-content">
                <h2 class="section-title">Historical Context and Evolution</h2>
                
                <p class="section-intro">
                    The evolution from ancient data practices to modern analytics represents a continuous 
                    thread of human innovation. Understanding this historical context helps us appreciate 
                    the fundamental principles that drive contemporary data science.
                </p>

                <h3>From Observation to Documentation</h3>
                <p>
                    Early civilizations recognized that successful decision-making required more than intuition. 
                    They developed systematic approaches to observe, record, and analyze patterns in their 
                    environment. This transition from purely intuitive to evidence-based decision making 
                    marked the beginning of analytical thinking.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Time Period</th>
                            <th>Civilization</th>
                            <th>Data Practice</th>
                            <th>Innovation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3500 BCE</td>
                            <td>Mesopotamia</td>
                            <td>Agricultural records</td>
                            <td>Cuneiform writing system for data storage</td>
                        </tr>
                        <tr>
                            <td>3000 BCE</td>
                            <td>Egypt</td>
                            <td>Nile flood predictions</td>
                            <td>Calendar systems based on astronomical data</td>
                        </tr>
                        <tr>
                            <td>2000 BCE</td>
                            <td>China</td>
                            <td>Weather forecasting</td>
                            <td>Systematic meteorological observations</td>
                        </tr>
                        <tr>
                            <td>500 BCE</td>
                            <td>Greece</td>
                            <td>Mathematical analysis</td>
                            <td>Geometric and statistical reasoning</td>
                        </tr>
                    </tbody>
                </table>

                <h3>The Role of Technology in Data Evolution</h3>
                <p>
                    Each technological advancement enabled more sophisticated data collection and analysis. 
                    From the invention of writing systems to the development of mathematical concepts, 
                    technology has consistently expanded our ability to work with data effectively.
                </p>

                <p>
                    The progression from simple tally marks to complex mathematical models demonstrates 
                    humanity's persistent drive to quantify, analyze, and predict. This historical 
                    perspective reveals that modern data science is not a revolutionary departure from 
                    the past, but rather the latest chapter in a long story of analytical evolution.
                </p>
            </div>
        </div>

        <!-- Section 2: Modern Parallels -->
        <div class="section" data-section="2">
            <div class="section-content">
                <h2 class="section-title">Modern Business Parallels</h2>
                
                <p class="section-intro">
                    Today's businesses face the same fundamental challenges as ancient civilizations: 
                    making optimal decisions with limited information and uncertain outcomes. The tools 
                    have evolved, but the underlying principles remain remarkably consistent.
                </p>

                <h3>Contemporary Applications of Ancient Principles</h3>
                <p>
                    Modern organizations apply the same data-driven approaches that guided ancient 
                    decision-makers. They collect information systematically, analyze patterns, and 
                    use insights to optimize outcomes. The scale and sophistication have increased 
                    dramatically, but the fundamental methodology remains unchanged.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Ancient Practice</th>
                            <th>Modern Business Application</th>
                            <th>Data Sources</th>
                            <th>Analysis Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Seasonal resource planning</td>
                            <td>Inventory management</td>
                            <td>Sales data, demand forecasts, supply chain metrics</td>
                            <td>ERP systems, predictive analytics</td>
                        </tr>
                        <tr>
                            <td>Trade route optimization</td>
                            <td>Supply chain logistics</td>
                            <td>Transportation costs, delivery times, customer locations</td>
                            <td>Route optimization algorithms, GPS tracking</td>
                        </tr>
                        <tr>
                            <td>Crop yield prediction</td>
                            <td>Market demand forecasting</td>
                            <td>Historical sales, market trends, economic indicators</td>
                            <td>Machine learning models, statistical analysis</td>
                        </tr>
                        <tr>
                            <td>Weather pattern analysis</td>
                            <td>Risk assessment</td>
                            <td>Market volatility, customer behavior, external factors</td>
                            <td>Risk modeling, scenario analysis</td>
                        </tr>
                    </tbody>
                </table>

                <h3>The Continuity of Analytical Thinking</h3>
                <p>
                    The connection between ancient and modern data practices reveals the timeless nature 
                    of analytical thinking. Whether predicting the best time to plant crops or forecasting 
                    quarterly sales, the process involves the same fundamental steps: data collection, 
                    pattern recognition, hypothesis formation, and decision implementation.
                </p>

                <p>
                    This continuity demonstrates that data science is not merely a technical discipline, 
                    but a fundamental human approach to understanding and navigating complexity. By 
                    recognizing these connections, we gain deeper appreciation for both the historical 
                    roots and future potential of data-driven decision making.
                </p>
            </div>
        </div>

        <!-- Section 3: Evolution Overview -->
        <div class="section" data-section="3">
            <div class="section-content">
                <h2 class="section-title">Evolution Overview and Key Insights</h2>
                
                <p class="section-intro">
                    The journey from ancient data practices to modern analytics reveals consistent themes 
                    and accelerating innovation. Understanding this evolution provides crucial context 
                    for appreciating current capabilities and anticipating future developments.
                </p>

                <h3>Fundamental Principles That Endure</h3>
                <p>
                    Despite dramatic technological advances, certain principles have remained constant 
                    throughout the evolution of data science. These enduring concepts form the 
                    philosophical foundation of analytical thinking and continue to guide modern practice.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Principle</th>
                            <th>Ancient Application</th>
                            <th>Modern Application</th>
                            <th>Future Relevance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Systematic Observation</strong></td>
                            <td>Tracking seasonal patterns</td>
                            <td>Automated data collection systems</td>
                            <td>IoT sensors and real-time monitoring</td>
                        </tr>
                        <tr>
                            <td><strong>Pattern Recognition</strong></td>
                            <td>Identifying weather cycles</td>
                            <td>Machine learning algorithms</td>
                            <td>AI-powered pattern detection</td>
                        </tr>
                        <tr>
                            <td><strong>Evidence-Based Decisions</strong></td>
                            <td>Using historical data for planning</td>
                            <td>Data-driven business strategies</td>
                            <td>Autonomous decision systems</td>
                        </tr>
                        <tr>
                            <td><strong>Continuous Learning</strong></td>
                            <td>Refining predictions over time</td>
                            <td>Adaptive algorithms and feedback loops</td>
                            <td>Self-improving AI systems</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Acceleration of Innovation</h3>
                <p>
                    The pace of innovation in data science has accelerated dramatically over the past 
                    century. What once took generations to develop now evolves in years or even months. 
                    This acceleration is driven by computational power, algorithmic sophistication, 
                    and the exponential growth of available data.
                </p>

                <p>
                    Looking forward, we can expect this acceleration to continue, with artificial 
                    intelligence and machine learning pushing the boundaries of what's possible in 
                    data analysis and decision making. However, the fundamental principles established 
                    by our ancestors will continue to provide the philosophical foundation for these 
                    advanced capabilities.
                </p>

                <div class="section-summary">
                    <h4>Key Takeaways</h4>
                    <ul>
                        <li>Data-driven decision making has ancient roots in human civilization</li>
                        <li>Fundamental analytical principles have remained consistent across millennia</li>
                        <li>Modern business practices directly parallel ancient data collection methods</li>
                        <li>Technological advancement has accelerated the sophistication of analysis</li>
                        <li>Understanding historical context enhances appreciation of current capabilities</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="module-navigation">
            <button class="btn secondary" data-action="prev-section" disabled>
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button class="btn primary" data-action="next-section">
                Next Section <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
};

DataScienceCourse.prototype.getModule2HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">Two Paradigms of Data Science</h1>
            <h2 class="module-subtitle">Inferential vs Computational Approaches</h2>
            <p class="module-description">
                Understand the fundamental differences between inferential and computational paradigms 
                in data science, their methods, applications, and when to use each approach.
            </p>
        </div>

        <div class="module-nav">
            <div class="section-indicator">
                <div class="section-dot active" data-section="0"></div>
                <div class="section-dot" data-section="1"></div>
                <div class="section-dot" data-section="2"></div>
            </div>
        </div>

        <!-- Section 0: Paradigm Introduction -->
        <div class="section active" data-section="0">
            <div class="section-content">
                <h2 class="section-title">Understanding the Two Paradigms</h2>
                
                <p class="section-intro">
                    Data science operates through two fundamental paradigms, each with distinct approaches, 
                    methods, and applications. Understanding these paradigms is crucial for selecting the 
                    appropriate methodology for different types of problems and datasets.
                </p>

                <h3>Paradigm Overview</h3>
                <p>
                    The field of data science can be broadly categorized into two primary paradigms: 
                    the inferential paradigm and the computational paradigm. Each paradigm represents 
                    a different philosophical approach to extracting insights from data, with unique 
                    strengths, limitations, and optimal use cases.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Inferential Paradigm</th>
                            <th>Computational Paradigm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Primary Focus</strong></td>
                            <td>Make predictions about populations based on sample data</td>
                            <td>Leverage computational methods to scale insight generation</td>
                        </tr>
                        <tr>
                            <td><strong>Core Methods</strong></td>
                            <td>Statistical inference, hypothesis testing, confidence intervals</td>
                            <td>Algorithms, machine learning, computational analysis</td>
                        </tr>
                        <tr>
                            <td><strong>Data Requirements</strong></td>
                            <td>Representative samples from target population</td>
                            <td>Large datasets with comprehensive coverage</td>
                        </tr>
                        <tr>
                            <td><strong>Main Limitation</strong></td>
                            <td>Dependence on sample representativeness</td>
                            <td>Algorithm complexity and computational costs</td>
                        </tr>
                        <tr>
                            <td><strong>Typical Applications</strong></td>
                            <td>Clinical trials, polling, quality control, A/B testing</td>
                            <td>Weather forecasting, recommendation systems, fraud detection</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Historical Development</h3>
                <p>
                    The inferential paradigm has its roots in classical statistics, developed primarily 
                    in the early 20th century by statisticians like Ronald Fisher and Jerzy Neyman. 
                    This approach was designed to work with limited data and make reliable inferences 
                    about larger populations. The computational paradigm emerged later, driven by 
                    advances in computing power and the availability of large datasets, particularly 
                    from the 1990s onward.
                </p>

                <div class="image-container">
                    <img src="assets/images/paradigm_comparison.png" alt="Visual comparison of inferential and computational paradigms" class="section-image">
                    <p class="image-caption">
                        The two paradigms of data science represent different approaches to extracting 
                        insights from data, each with unique strengths and optimal applications.
                    </p>
                </div>
            </div>
        </div>

        <!-- Section 1: Inferential Paradigm Deep Dive -->
        <div class="section" data-section="1">
            <div class="section-content">
                <h2 class="section-title">Inferential Paradigm Deep Dive</h2>
                
                <p class="section-intro">
                    The inferential paradigm focuses on making statistically valid conclusions about 
                    populations based on carefully selected samples. This approach emphasizes the 
                    importance of experimental design, statistical significance, and uncertainty quantification.
                </p>

                <h3>Core Principles and Methods</h3>
                <p>
                    The inferential paradigm is built on the foundation of statistical theory and 
                    probability. It uses mathematical frameworks to quantify uncertainty and make 
                    reliable predictions about populations that are too large or impractical to 
                    study in their entirety. The key strength of this approach lies in its ability 
                    to provide confidence measures and statistical significance testing.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>Purpose</th>
                            <th>Example Application</th>
                            <th>Key Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Hypothesis Testing</strong></td>
                            <td>Test specific claims about population parameters</td>
                            <td>Testing if a new drug is more effective than existing treatment</td>
                            <td>P-value, statistical significance</td>
                        </tr>
                        <tr>
                            <td><strong>Confidence Intervals</strong></td>
                            <td>Estimate range of plausible values for population parameters</td>
                            <td>Estimating average income in a city with margin of error</td>
                            <td>Range estimate with confidence level</td>
                        </tr>
                        <tr>
                            <td><strong>Regression Analysis</strong></td>
                            <td>Model relationships between variables</td>
                            <td>Predicting house prices based on size, location, age</td>
                            <td>Coefficients with standard errors</td>
                        </tr>
                        <tr>
                            <td><strong>ANOVA</strong></td>
                            <td>Compare means across multiple groups</td>
                            <td>Comparing test scores across different teaching methods</td>
                            <td>F-statistic, group differences</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Real-World Case Study: Clinical Drug Trial</h3>
                <p>
                    Consider a pharmaceutical company testing a new medication for hypertension. 
                    Using the inferential paradigm, researchers would design a randomized controlled 
                    trial with 1,000 patients. Half receive the new drug, half receive a placebo. 
                    After the trial period, statistical analysis determines whether the observed 
                    difference in blood pressure reduction is statistically significant and can 
                    be generalized to the broader population of hypertension patients.
                </p>

                <p>
                    The results might show that the new drug reduces blood pressure by an average 
                    of 15 mmHg compared to placebo, with a 95% confidence interval of 12-18 mmHg 
                    and a p-value of 0.001. This provides strong evidence that the drug is effective 
                    for the general population of hypertension patients, not just the specific 
                    individuals in the trial.
                </p>

                <h3>Strengths and Limitations</h3>
                <p>
                    The inferential paradigm excels in situations where you need to make reliable 
                    generalizations from limited data, quantify uncertainty, and establish causal 
                    relationships through controlled experiments. However, it requires careful 
                    attention to sampling methods, assumes that samples are representative of 
                    the target population, and may not be suitable for very large, complex datasets 
                    where computational approaches might be more effective.
                </p>
            </div>
        </div>

        <!-- Section 2: Computational Paradigm Deep Dive -->
        <div class="section" data-section="2">
            <div class="section-content">
                <h2 class="section-title">Computational Paradigm Deep Dive</h2>
                
                <p class="section-intro">
                    The computational paradigm leverages algorithms and computing power to process 
                    large datasets and extract patterns that would be impossible to detect through 
                    traditional statistical methods. This approach emphasizes scalability, automation, 
                    and the ability to handle complex, high-dimensional data.
                </p>

                <h3>Core Principles and Methods</h3>
                <p>
                    The computational paradigm is characterized by its reliance on algorithms, 
                    machine learning models, and computational processing power. Rather than 
                    focusing on statistical inference from samples, this approach works with 
                    comprehensive datasets and uses computational methods to identify patterns, 
                    make predictions, and optimize outcomes. The emphasis is on algorithmic 
                    sophistication and scalable processing capabilities.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>Purpose</th>
                            <th>Example Application</th>
                            <th>Key Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Machine Learning</strong></td>
                            <td>Learn patterns from data to make predictions</td>
                            <td>Netflix movie recommendations based on viewing history</td>
                            <td>Prediction models, accuracy metrics</td>
                        </tr>
                        <tr>
                            <td><strong>Deep Learning</strong></td>
                            <td>Process complex, high-dimensional data</td>
                            <td>Image recognition for medical diagnosis</td>
                            <td>Neural network models, classification results</td>
                        </tr>
                        <tr>
                            <td><strong>Optimization Algorithms</strong></td>
                            <td>Find optimal solutions to complex problems</td>
                            <td>Route optimization for delivery trucks</td>
                            <td>Optimal solutions, efficiency improvements</td>
                        </tr>
                        <tr>
                            <td><strong>Natural Language Processing</strong></td>
                            <td>Analyze and understand human language</td>
                            <td>Sentiment analysis of customer reviews</td>
                            <td>Text classifications, sentiment scores</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Real-World Case Study: Weather Forecasting</h3>
                <p>
                    Modern weather forecasting exemplifies the computational paradigm in action. 
                    Meteorological services process enormous amounts of data from satellites, 
                    weather stations, radar systems, and atmospheric sensors. This data includes 
                    temperature, humidity, wind patterns, pressure readings, and satellite imagery 
                    collected continuously from around the globe.
                </p>

                <p>
                    Supercomputers running complex numerical weather prediction models process 
                    this data using computational fluid dynamics algorithms, machine learning 
                    models for pattern recognition, and ensemble methods that run multiple 
                    scenarios. The result is detailed weather forecasts that can predict 
                    conditions up to 7-10 days in advance with reasonable accuracy, something 
                    that would be impossible using traditional inferential statistical methods alone.
                </p>

                <h3>Comparison of Paradigm Applications</h3>
                <p>
                    The choice between paradigms often depends on the nature of the problem, 
                    available data, and desired outcomes. The inferential paradigm is ideal 
                    when you need to make generalizable conclusions from limited data, establish 
                    statistical significance, or work within regulatory frameworks that require 
                    statistical validation. The computational paradigm excels when dealing with 
                    large, complex datasets, real-time processing requirements, or problems 
                    that benefit from algorithmic optimization.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Scenario</th>
                            <th>Recommended Paradigm</th>
                            <th>Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Testing effectiveness of a new educational program</td>
                            <td>Inferential</td>
                            <td>Need statistical significance and generalizability to all schools</td>
                        </tr>
                        <tr>
                            <td>Personalizing content recommendations for millions of users</td>
                            <td>Computational</td>
                            <td>Requires processing large datasets and real-time personalization</td>
                        </tr>
                        <tr>
                            <td>Determining if a manufacturing process meets quality standards</td>
                            <td>Inferential</td>
                            <td>Need confidence intervals and statistical quality control</td>
                        </tr>
                        <tr>
                            <td>Optimizing supply chain logistics across multiple countries</td>
                            <td>Computational</td>
                            <td>Complex optimization problem requiring algorithmic solutions</td>
                        </tr>
                    </tbody>
                </table>

                <div class="section-summary">
                    <h4>Key Takeaways</h4>
                    <ul>
                        <li>Inferential paradigm focuses on statistical inference from samples to populations</li>
                        <li>Computational paradigm leverages algorithms and computing power for large-scale analysis</li>
                        <li>Each paradigm has distinct strengths and optimal use cases</li>
                        <li>Modern data science often combines elements from both paradigms</li>
                        <li>Paradigm selection depends on data characteristics, problem requirements, and available resources</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="module-navigation">
            <button class="btn secondary" data-action="prev-section" disabled>
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button class="btn primary" data-action="next-section">
                Next Section <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
};

DataScienceCourse.prototype.getModule3HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">AI Fundamentals and Relationships</h1>
            <h2 class="module-subtitle">Understanding AI, ML, and Deep Learning Connections</h2>
            <p class="module-description">
                Explore the hierarchical relationships between Artificial Intelligence, Machine Learning, 
                and Deep Learning, understanding how these technologies build upon each other and their 
                practical applications in modern data science.
            </p>
        </div>

        <div class="module-nav">
            <div class="section-indicator">
                <div class="section-dot active" data-section="0"></div>
                <div class="section-dot" data-section="1"></div>
                <div class="section-dot" data-section="2"></div>
            </div>
        </div>

        <!-- Section 0: AI Hierarchy Overview -->
        <div class="section active" data-section="0">
            <div class="section-content">
                <h2 class="section-title">The AI Technology Hierarchy</h2>
                
                <p class="section-intro">
                    Artificial Intelligence, Machine Learning, and Deep Learning represent a nested 
                    hierarchy of technologies, each building upon the previous level with increasing 
                    sophistication and specialization. Understanding these relationships is crucial 
                    for navigating the modern data science landscape.
                </p>

                <h3>Hierarchical Structure</h3>
                <p>
                    The relationship between AI, ML, and Deep Learning can be visualized as concentric 
                    circles, with AI as the broadest category encompassing all forms of machine 
                    intelligence, Machine Learning as a subset focused on learning from data, and 
                    Deep Learning as a specialized approach within Machine Learning that uses 
                    neural networks with multiple layers.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Technology Level</th>
                            <th>Definition</th>
                            <th>Key Characteristics</th>
                            <th>Example Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Artificial Intelligence</strong></td>
                            <td>Machines that can perform tasks typically requiring human intelligence</td>
                            <td>Problem-solving, reasoning, perception, language understanding</td>
                            <td>Expert systems, game playing, robotics, natural language processing</td>
                        </tr>
                        <tr>
                            <td><strong>Machine Learning</strong></td>
                            <td>AI systems that improve performance through experience without explicit programming</td>
                            <td>Pattern recognition, statistical learning, adaptive algorithms</td>
                            <td>Recommendation systems, fraud detection, predictive analytics</td>
                        </tr>
                        <tr>
                            <td><strong>Deep Learning</strong></td>
                            <td>ML using artificial neural networks with multiple hidden layers</td>
                            <td>Hierarchical feature learning, automatic feature extraction</td>
                            <td>Image recognition, speech processing, natural language generation</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Historical Development Timeline</h3>
                <p>
                    The development of these technologies follows a logical progression, with each 
                    building upon advances in the previous level. Artificial Intelligence emerged 
                    first as a broad concept in the 1950s, followed by Machine Learning as a 
                    specific approach in the 1960s-1980s, and Deep Learning gaining prominence 
                    in the 2000s-2010s with advances in computational power and data availability.
                </p>

                <div class="image-container">
                    <img src="assets/images/ai_venn_diagram.png" alt="Venn diagram showing the relationship between AI, ML, and Deep Learning" class="section-image">
                    <p class="image-caption">
                        The hierarchical relationship between AI, Machine Learning, and Deep Learning, 
                        showing how each technology builds upon and extends the capabilities of the previous level.
                    </p>
                </div>
            </div>
        </div>

        <!-- Section 1: Machine Learning Deep Dive -->
        <div class="section" data-section="1">
            <div class="section-content">
                <h2 class="section-title">Machine Learning: Learning from Data</h2>
                
                <p class="section-intro">
                    Machine Learning represents a paradigm shift from traditional programming, where 
                    instead of explicitly programming rules, we provide data and desired outcomes, 
                    allowing the system to learn patterns and make predictions on new, unseen data.
                </p>

                <h3>Core Machine Learning Approaches</h3>
                <p>
                    Machine Learning encompasses several distinct approaches, each suited to different 
                    types of problems and data characteristics. The three primary categories are 
                    supervised learning, unsupervised learning, and reinforcement learning, each 
                    with unique methodologies and applications.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Learning Type</th>
                            <th>Data Requirements</th>
                            <th>Goal</th>
                            <th>Common Algorithms</th>
                            <th>Real-World Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Supervised Learning</strong></td>
                            <td>Labeled input-output pairs</td>
                            <td>Predict outcomes for new inputs</td>
                            <td>Linear regression, decision trees, random forests</td>
                            <td>Email spam detection using labeled spam/not-spam emails</td>
                        </tr>
                        <tr>
                            <td><strong>Unsupervised Learning</strong></td>
                            <td>Input data without labels</td>
                            <td>Discover hidden patterns or structures</td>
                            <td>K-means clustering, PCA, association rules</td>
                            <td>Customer segmentation based on purchasing behavior</td>
                        </tr>
                        <tr>
                            <td><strong>Reinforcement Learning</strong></td>
                            <td>Environment with rewards/penalties</td>
                            <td>Learn optimal actions through trial and error</td>
                            <td>Q-learning, policy gradients, actor-critic</td>
                            <td>Game-playing AI that improves through repeated play</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Machine Learning Workflow</h3>
                <p>
                    The typical machine learning workflow involves several key stages: data collection 
                    and preparation, feature engineering, model selection and training, evaluation 
                    and validation, and finally deployment and monitoring. Each stage requires 
                    careful attention to ensure the resulting model is accurate, reliable, and 
                    generalizable to new data.
                </p>

                <p>
                    Data preparation often consumes 70-80% of the time in a machine learning project, 
                    involving tasks such as cleaning missing values, handling outliers, normalizing 
                    features, and splitting data into training, validation, and test sets. The 
                    quality of this preparation directly impacts the performance of the final model.
                </p>

                <h3>Practical Applications and Impact</h3>
                <p>
                    Machine learning has revolutionized numerous industries by enabling automated 
                    decision-making, pattern recognition, and predictive analytics at scale. From 
                    recommendation systems that power e-commerce platforms to fraud detection 
                    systems that protect financial transactions, ML applications have become 
                    integral to modern business operations and daily life.
                </p>
            </div>
        </div>

        <!-- Section 2: Deep Learning and Neural Networks -->
        <div class="section" data-section="2">
            <div class="section-content">
                <h2 class="section-title">Deep Learning: Neural Networks and Beyond</h2>
                
                <p class="section-intro">
                    Deep Learning represents the cutting edge of machine learning, using artificial 
                    neural networks with multiple layers to automatically learn hierarchical 
                    representations of data. This approach has achieved breakthrough performance 
                    in areas previously considered too complex for machine automation.
                </p>

                <h3>Neural Network Architecture</h3>
                <p>
                    Deep learning models are built using artificial neural networks inspired by 
                    the structure of biological neurons. These networks consist of interconnected 
                    nodes (neurons) organized in layers, with each connection having an associated 
                    weight that determines the strength of the signal passed between neurons. 
                    The "deep" in deep learning refers to networks with many hidden layers between 
                    the input and output layers.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Network Type</th>
                            <th>Architecture</th>
                            <th>Best Suited For</th>
                            <th>Key Innovation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Feedforward Networks</strong></td>
                            <td>Sequential layers with forward connections</td>
                            <td>Classification and regression tasks</td>
                            <td>Universal function approximation</td>
                        </tr>
                        <tr>
                            <td><strong>Convolutional Networks (CNNs)</strong></td>
                            <td>Specialized layers for spatial data processing</td>
                            <td>Image recognition and computer vision</td>
                            <td>Local feature detection and spatial hierarchies</td>
                        </tr>
                        <tr>
                            <td><strong>Recurrent Networks (RNNs)</strong></td>
                            <td>Connections that create loops for memory</td>
                            <td>Sequential data and time series</td>
                            <td>Ability to process variable-length sequences</td>
                        </tr>
                        <tr>
                            <td><strong>Transformer Networks</strong></td>
                            <td>Attention mechanisms without recurrence</td>
                            <td>Natural language processing</td>
                            <td>Parallel processing and long-range dependencies</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Deep Learning Breakthroughs</h3>
                <p>
                    Deep learning has achieved remarkable breakthroughs in several domains that 
                    were previously considered extremely challenging for computers. In computer 
                    vision, deep learning models now surpass human performance in image 
                    classification tasks. In natural language processing, models like GPT and 
                    BERT have demonstrated unprecedented capabilities in understanding and 
                    generating human-like text.
                </p>

                <p>
                    These breakthroughs have been enabled by three key factors: the availability 
                    of large datasets, advances in computational power (particularly GPUs), and 
                    algorithmic innovations such as better optimization techniques and network 
                    architectures. The combination of these factors has made it possible to train 
                    networks with millions or even billions of parameters.
                </p>

                <h3>Integration and Future Directions</h3>
                <p>
                    The relationship between AI, ML, and Deep Learning continues to evolve as 
                    these technologies mature and integrate with each other. Modern AI systems 
                    often combine multiple approaches, using traditional AI for reasoning and 
                    planning, machine learning for pattern recognition and prediction, and deep 
                    learning for complex perception and generation tasks.
                </p>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Integration Area</th>
                            <th>Combined Approach</th>
                            <th>Benefits</th>
                            <th>Example Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Autonomous Vehicles</strong></td>
                            <td>Deep learning for perception + AI for planning</td>
                            <td>Real-time object recognition with strategic decision-making</td>
                            <td>Self-driving cars that can navigate complex traffic scenarios</td>
                        </tr>
                        <tr>
                            <td><strong>Medical Diagnosis</strong></td>
                            <td>Deep learning for image analysis + ML for risk assessment</td>
                            <td>Accurate image interpretation with statistical validation</td>
                            <td>AI systems that can detect diseases in medical scans</td>
                        </tr>
                        <tr>
                            <td><strong>Financial Trading</strong></td>
                            <td>ML for market prediction + AI for portfolio optimization</td>
                            <td>Data-driven predictions with systematic risk management</td>
                            <td>Algorithmic trading systems that adapt to market conditions</td>
                        </tr>
                        <tr>
                            <td><strong>Smart Assistants</strong></td>
                            <td>Deep learning for speech/language + AI for reasoning</td>
                            <td>Natural communication with intelligent task execution</td>
                            <td>Virtual assistants that understand context and intent</td>
                        </tr>
                    </tbody>
                </table>

                <div class="section-summary">
                    <h4>Key Takeaways</h4>
                    <ul>
                        <li>AI, ML, and Deep Learning form a hierarchical relationship with increasing specialization</li>
                        <li>Machine Learning focuses on learning patterns from data without explicit programming</li>
                        <li>Deep Learning uses neural networks to automatically learn hierarchical features</li>
                        <li>Each technology has distinct strengths and optimal applications</li>
                        <li>Modern AI systems increasingly combine multiple approaches for enhanced capabilities</li>
                        <li>Understanding these relationships is crucial for selecting appropriate technologies</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="module-navigation">
            <button class="btn secondary" data-action="prev-section" disabled>
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button class="btn primary" data-action="next-section">
                Next Section <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
};

// Placeholder functions for remaining modules (to be implemented)
DataScienceCourse.prototype.getModule4HTML = function() {
    return `<div class="module-container"><h1>Module 4: Evolution Timeline (1940s-Present)</h1><p>Content coming soon...</p></div>`;
};

DataScienceCourse.prototype.getModule5HTML = function() {
    return `<div class="module-container"><h1>Module 5: Large Language Models Deep Dive</h1><p>Content coming soon...</p></div>`;
};

DataScienceCourse.prototype.getModule6HTML = function() {
    return `<div class="module-container"><h1>Module 6: Real-World Applications and Future</h1><p>Content coming soon...</p></div>`;
};

