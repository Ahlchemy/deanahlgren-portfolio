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
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3 class="card-title">Modern Business Parallel</h3>
                    </div>
                    <div class="card-content">
                        <p>Today's businesses make decisions using the same fundamental approach, but with enhanced methods:</p>
                        <ul>
                            <li><strong>Inventory Management:</strong> Like firewood stocking</li>
                            <li><strong>Market Timing:</strong> Like travel planning</li>
                            <li><strong>Product Launches:</strong> Like crop cultivation</li>
                            <li><strong>Resource Allocation:</strong> Like community planning</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="interactive-element">
                <img src="assets/images/ancient_data_collection.jpg" alt="Ancient Data Collection Methods" class="full-width-image">
                <p class="image-caption">Ancient civilizations developed sophisticated methods for collecting and analyzing data to make critical decisions.</p>
            </div>
        </div>

        <!-- Section 1: Historical Context -->
        <div class="section" data-section="1">
            <div class="section-header">
                <h2 class="section-title">Historical Context of Data-Driven Decisions</h2>
                <p class="section-description">
                    Understanding how data collection and analysis evolved from simple observation 
                    to complex statistical methods.
                </p>
            </div>

            <div class="interactive-timeline">
                <div class="timeline-header">
                    <h3>Evolution of Decision-Making Methods</h3>
                    <p>Click on each era to explore how data-driven decisions evolved over time</p>
                </div>
                <div class="timeline-container">
                    <div class="timeline-line"></div>
                    
                    <div class="timeline-item" data-era="ancient">
                        <div class="timeline-content">
                            <div class="timeline-date">3000 BCE - 500 CE</div>
                            <h4 class="timeline-title">Ancient Civilizations</h4>
                            <p class="timeline-description">
                                Observation-based decisions using natural indicators, astronomical patterns, 
                                and empirical knowledge passed down through generations.
                            </p>
                        </div>
                        <div class="timeline-marker"></div>
                    </div>

                    <div class="timeline-item" data-era="medieval">
                        <div class="timeline-content">
                            <div class="timeline-date">500 - 1500 CE</div>
                            <h4 class="timeline-title">Medieval Period</h4>
                            <p class="timeline-description">
                                Introduction of record-keeping systems, trade data analysis, 
                                and early mathematical approaches to problem-solving.
                            </p>
                        </div>
                        <div class="timeline-marker"></div>
                    </div>

                    <div class="timeline-item" data-era="renaissance">
                        <div class="timeline-content">
                            <div class="timeline-date">1500 - 1700 CE</div>
                            <h4 class="timeline-title">Renaissance & Scientific Revolution</h4>
                            <p class="timeline-description">
                                Development of scientific method, systematic data collection, 
                                and early statistical concepts for decision-making.
                            </p>
                        </div>
                        <div class="timeline-marker"></div>
                    </div>

                    <div class="timeline-item" data-era="industrial">
                        <div class="timeline-content">
                            <div class="timeline-date">1700 - 1900 CE</div>
                            <h4 class="timeline-title">Industrial Revolution</h4>
                            <p class="timeline-description">
                                Mass data collection, quality control methods, and the birth 
                                of modern statistics for industrial optimization.
                            </p>
                        </div>
                        <div class="timeline-marker"></div>
                    </div>

                    <div class="timeline-item" data-era="modern">
                        <div class="timeline-content">
                            <div class="timeline-date">1900 - Present</div>
                            <h4 class="timeline-title">Modern Era</h4>
                            <p class="timeline-description">
                                Computer-aided analysis, big data, machine learning, and 
                                AI-powered decision-making systems.
                            </p>
                        </div>
                        <div class="timeline-marker"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Modern Parallels -->
        <div class="section" data-section="2">
            <div class="section-header">
                <h2 class="section-title">Modern Business Parallels</h2>
                <p class="section-description">
                    See how ancient decision-making principles directly translate to modern business analytics 
                    and data science applications.
                </p>
            </div>

            <div class="content-grid">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>Ancient: Seasonal Planning</h3>
                            <p>Communities planned resource allocation based on seasonal patterns and historical data.</p>
                        </div>
                        <div class="flip-card-back">
                            <h3>Modern: Demand Forecasting</h3>
                            <p>Businesses use historical sales data, seasonal trends, and market indicators to predict demand and optimize inventory.</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>Ancient: Weather Prediction</h3>
                            <p>Farmers observed cloud patterns, wind direction, and animal behavior to predict weather.</p>
                        </div>
                        <div class="flip-card-back">
                            <h3>Modern: Predictive Analytics</h3>
                            <p>Companies analyze customer behavior patterns, market trends, and external factors to predict business outcomes.</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>Ancient: Trade Route Optimization</h3>
                            <p>Merchants analyzed distance, safety, and resource availability to choose optimal trade routes.</p>
                        </div>
                        <div class="flip-card-back">
                            <h3>Modern: Supply Chain Optimization</h3>
                            <p>Logistics companies use algorithms to optimize delivery routes, minimize costs, and maximize efficiency.</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>Ancient: Resource Management</h3>
                            <p>Leaders allocated community resources based on population needs and available supplies.</p>
                        </div>
                        <div class="flip-card-back">
                            <h3>Modern: Resource Allocation</h3>
                            <p>Organizations use data analytics to allocate budgets, personnel, and assets for maximum ROI.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="interactive-element">
                <img src="assets/images/modern_analytics_dashboard.jpg" alt="Modern Analytics Dashboard" class="full-width-image">
                <p class="image-caption">Modern business dashboards provide real-time data analysis capabilities that ancient civilizations could only dream of.</p>
            </div>
        </div>

        <!-- Section 3: Evolution Overview -->
        <div class="section" data-section="3">
            <div class="section-header">
                <h2 class="section-title">The Evolution of Statistical Techniques & Computing</h2>
                <p class="section-description">
                    Explore how the methods have become more accurate and faster through technological advancement.
                </p>
            </div>

            <div class="content-card">
                <h3>Key Evolution Factors</h3>
                <div class="evolution-grid">
                    <div class="evolution-item">
                        <div class="evolution-icon">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <h4>Statistical Techniques</h4>
                        <p>From simple counting and observation to sophisticated statistical models, hypothesis testing, and probability theory.</p>
                    </div>
                    
                    <div class="evolution-item">
                        <div class="evolution-icon">
                            <i class="fas fa-microchip"></i>
                        </div>
                        <h4>Computing Power</h4>
                        <p>From manual calculations to powerful computers capable of processing massive datasets in real-time.</p>
                    </div>
                    
                    <div class="evolution-item">
                        <div class="evolution-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <h4>Data Storage</h4>
                        <p>From oral traditions and simple records to vast digital databases storing petabytes of information.</p>
                    </div>
                    
                    <div class="evolution-item">
                        <div class="evolution-icon">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <h4>Data Collection</h4>
                        <p>From manual observation to automated sensors, IoT devices, and real-time data streaming.</p>
                    </div>
                </div>
            </div>

            <div class="knowledge-check">
                <h3>Knowledge Check</h3>
                <div class="quiz-question">
                    <p class="question-text">What is the fundamental principle that connects ancient decision-making with modern data science?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-answer="correct">
                            Decisions have always been based on observing patterns and analyzing available data
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Ancient people didn't use data for decision-making
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Modern technology has completely changed how we make decisions
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Only statistical methods matter in decision-making
                        </div>
                    </div>
                    <div class="quiz-feedback">
                        <p><strong>Correct!</strong> The fundamental principle remains the same: observing patterns, collecting relevant data, and making informed decisions based on that analysis. Technology has enhanced our capabilities, but the core approach is unchanged.</p>
                    </div>
                </div>
            </div>
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
            <div class="nav-buttons">
                <button class="btn secondary" data-action="prev-section" disabled>
                    <i class="fas fa-chevron-left"></i> Previous
                </button>
                <button class="btn primary" data-action="next-section">
                    Next <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <!-- Section 0: Paradigm Introduction -->
        <div class="section active" data-section="0">
            <div class="section-header">
                <h2 class="section-title">Understanding the Two Paradigms</h2>
                <p class="section-description">
                    Data science operates through two fundamental paradigms, each with distinct approaches, 
                    methods, and applications. Let's explore what makes them unique.
                </p>
            </div>

            <div class="paradigm-comparison">
                <div class="comparison-header">
                    <h3>Interactive Paradigm Comparison</h3>
                    <p>Toggle between paradigms to see their differences</p>
                </div>
                
                <div class="comparison-toggle">
                    <button class="toggle-option active" data-paradigm="both">Both Paradigms</button>
                    <button class="toggle-option" data-paradigm="inferential">Inferential Only</button>
                    <button class="toggle-option" data-paradigm="computational">Computational Only</button>
                </div>

                <div class="comparison-content">
                    <div class="paradigm-card inferential">
                        <h3 class="paradigm-title">Inferential Paradigm</h3>
                        <div class="paradigm-image">
                            <img src="assets/images/paradigm_comparison.png" alt="Paradigm Comparison" style="width: 100%; border-radius: 8px;">
                        </div>
                        <ul class="paradigm-features">
                            <li><i class="fas fa-target"></i> <strong>Focus:</strong> Make predictions on population based on sample data</li>
                            <li><i class="fas fa-chart-bar"></i> <strong>Methods:</strong> Statistical inference, hypothesis testing</li>
                            <li><i class="fas fa-exclamation-triangle"></i> <strong>Limitation:</strong> Representativeness of data</li>
                            <li><i class="fas fa-users"></i> <strong>Approach:</strong> Sample to population generalization</li>
                        </ul>
                        <div class="paradigm-examples">
                            <h4>Real-World Examples:</h4>
                            <ul>
                                <li>Clinical trials for new medications</li>
                                <li>Political polling and election predictions</li>
                                <li>Quality control in manufacturing</li>
                                <li>A/B testing for website optimization</li>
                            </ul>
                        </div>
                    </div>

                    <div class="paradigm-card computational">
                        <h3 class="paradigm-title">Computational Paradigm</h3>
                        <ul class="paradigm-features">
                            <li><i class="fas fa-rocket"></i> <strong>Focus:</strong> Leverage computational methods to scale insight generation</li>
                            <li><i class="fas fa-cogs"></i> <strong>Methods:</strong> Algorithms and computational analysis</li>
                            <li><i class="fas fa-microchip"></i> <strong>Limitation:</strong> Algorithm complexity and training costs</li>
                            <li><i class="fas fa-database"></i> <strong>Approach:</strong> Big data processing and pattern recognition</li>
                        </ul>
                        <div class="paradigm-examples">
                            <h4>Real-World Examples:</h4>
                            <ul>
                                <li>Weather forecasting systems</li>
                                <li>Route optimization for delivery services</li>
                                <li>Recommendation engines (Netflix, Amazon)</li>
                                <li>Fraud detection in financial transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 1: Inferential Approach Deep Dive -->
        <div class="section" data-section="1">
            <div class="section-header">
                <h2 class="section-title">Inferential Paradigm Deep Dive</h2>
                <p class="section-description">
                    Explore how the inferential paradigm uses statistical methods to draw conclusions 
                    from sample data and make predictions about larger populations.
                </p>
            </div>

            <div class="content-grid">
                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        <h3 class="card-title">Medical Trial Example</h3>
                    </div>
                    <div class="card-content">
                        <h4>Effectiveness of a New Medication</h4>
                        <p><strong>Scenario:</strong> Testing a new drug for blood pressure reduction</p>
                        <ul>
                            <li><strong>Sample:</strong> 1,000 patients with hypertension</li>
                            <li><strong>Method:</strong> Randomized controlled trial</li>
                            <li><strong>Analysis:</strong> Statistical significance testing</li>
                            <li><strong>Inference:</strong> Results generalized to all hypertension patients</li>
                        </ul>
                        <div class="example-stats">
                            <div class="stat">
                                <span class="number">85%</span>
                                <span class="label">Efficacy Rate</span>
                            </div>
                            <div class="stat">
                                <span class="number">p < 0.05</span>
                                <span class="label">Statistical Significance</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-vote-yea"></i>
                        </div>
                        <h3 class="card-title">Policy Impact Assessment</h3>
                    </div>
                    <div class="card-content">
                        <h4>Impact of New Education Policy</h4>
                        <p><strong>Scenario:</strong> Evaluating the effect of a new teaching method</p>
                        <ul>
                            <li><strong>Sample:</strong> 50 schools implementing the new policy</li>
                            <li><strong>Method:</strong> Before-and-after comparison study</li>
                            <li><strong>Analysis:</strong> Confidence intervals and effect sizes</li>
                            <li><strong>Inference:</strong> Policy effectiveness for all schools</li>
                        </ul>
                        <div class="example-stats">
                            <div class="stat">
                                <span class="number">12%</span>
                                <span class="label">Improvement in Test Scores</span>
                            </div>
                            <div class="stat">
                                <span class="number">95%</span>
                                <span class="label">Confidence Level</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="interactive-element">
                <h3>Key Characteristics of Inferential Paradigm</h3>
                <div class="characteristics-grid">
                    <div class="characteristic-item">
                        <i class="fas fa-search"></i>
                        <h4>Sample-Based</h4>
                        <p>Works with representative samples to make broader conclusions</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Hypothesis Testing</h4>
                        <p>Uses statistical tests to validate or reject hypotheses</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-percentage"></i>
                        <h4>Uncertainty Quantification</h4>
                        <p>Provides confidence intervals and significance levels</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-users"></i>
                        <h4>Population Inference</h4>
                        <p>Generalizes findings from samples to entire populations</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Computational Approach Deep Dive -->
        <div class="section" data-section="2">
            <div class="section-header">
                <h2 class="section-title">Computational Paradigm Deep Dive</h2>
                <p class="section-description">
                    Discover how the computational paradigm leverages algorithms and computing power 
                    to process large datasets and generate insights at scale.
                </p>
            </div>

            <div class="content-grid">
                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-cloud-rain"></i>
                        </div>
                        <h3 class="card-title">Weather Forecasting</h3>
                    </div>
                    <div class="card-content">
                        <h4>Predicting Weather Patterns</h4>
                        <p><strong>Scenario:</strong> 7-day weather forecast for a region</p>
                        <ul>
                            <li><strong>Data:</strong> Satellite imagery, sensor readings, historical patterns</li>
                            <li><strong>Method:</strong> Numerical weather prediction models</li>
                            <li><strong>Processing:</strong> Supercomputers running complex algorithms</li>
                            <li><strong>Output:</strong> Detailed forecasts with probability estimates</li>
                        </ul>
                        <div class="example-stats">
                            <div class="stat">
                                <span class="number">10TB</span>
                                <span class="label">Daily Data Processed</span>
                            </div>
                            <div class="stat">
                                <span class="number">85%</span>
                                <span class="label">7-Day Accuracy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-route"></i>
                        </div>
                        <h3 class="card-title">Vehicle Route Optimization</h3>
                    </div>
                    <div class="card-content">
                        <h4>Minimizing Delivery Costs</h4>
                        <p><strong>Scenario:</strong> Optimizing delivery routes for 1000+ packages</p>
                        <ul>
                            <li><strong>Data:</strong> GPS coordinates, traffic patterns, delivery constraints</li>
                            <li><strong>Method:</strong> Genetic algorithms and machine learning</li>
                            <li><strong>Processing:</strong> Real-time optimization engines</li>
                            <li><strong>Output:</strong> Optimal routes minimizing time and fuel costs</li>
                        </ul>
                        <div class="example-stats">
                            <div class="stat">
                                <span class="number">25%</span>
                                <span class="label">Cost Reduction</span>
                            </div>
                            <div class="stat">
                                <span class="number">30%</span>
                                <span class="label">Time Savings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="interactive-element">
                <h3>Key Characteristics of Computational Paradigm</h3>
                <div class="characteristics-grid">
                    <div class="characteristic-item">
                        <i class="fas fa-database"></i>
                        <h4>Big Data Processing</h4>
                        <p>Handles massive datasets that exceed traditional analysis capabilities</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-cogs"></i>
                        <h4>Algorithm-Driven</h4>
                        <p>Relies on sophisticated algorithms and machine learning models</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <h4>Real-Time Processing</h4>
                        <p>Provides immediate insights and automated decision-making</p>
                    </div>
                    <div class="characteristic-item">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <h4>Scalable Solutions</h4>
                        <p>Scales efficiently with increasing data volume and complexity</p>
                    </div>
                </div>
            </div>

            <div class="knowledge-check">
                <h3>Knowledge Check</h3>
                <div class="quiz-question">
                    <p class="question-text">Which paradigm would be most appropriate for testing the effectiveness of a new teaching method in schools?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-answer="correct">
                            Inferential paradigm - using statistical methods to generalize from a sample of schools to the broader population
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Computational paradigm - using algorithms to process large amounts of educational data
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Both paradigms are equally suitable for this type of research
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Neither paradigm is appropriate for educational research
                        </div>
                    </div>
                    <div class="quiz-feedback">
                        <p><strong>Correct!</strong> The inferential paradigm is ideal for this scenario because it focuses on drawing conclusions from a representative sample (selected schools) and generalizing those findings to the broader population (all schools). This approach uses statistical methods to test hypotheses about the teaching method's effectiveness.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

DataScienceCourse.prototype.getModule3HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">AI Fundamentals and Relationships</h1>
            <h2 class="module-subtitle">Understanding AI, ML, DL, and Generative AI Connections</h2>
            <p class="module-description">
                Explore the relationships between Artificial Intelligence, Machine Learning, Deep Learning, 
                and Generative AI through interactive visualizations and real-world examples.
            </p>
        </div>

        <div class="module-nav">
            <div class="section-indicator">
                <div class="section-dot active" data-section="0"></div>
                <div class="section-dot" data-section="1"></div>
                <div class="section-dot" data-section="2"></div>
            </div>
            <div class="nav-buttons">
                <button class="btn secondary" data-action="prev-section" disabled>
                    <i class="fas fa-chevron-left"></i> Previous
                </button>
                <button class="btn primary" data-action="next-section">
                    Next <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <!-- Section 0: AI Definitions and Relationships -->
        <div class="section active" data-section="0">
            <div class="section-header">
                <h2 class="section-title">AI, ML, DL, and Generative AI Relationships</h2>
                <p class="section-description">
                    Understand how these technologies relate to each other through an interactive 
                    visualization that shows their hierarchical relationships and overlaps.
                </p>
            </div>

            <div class="venn-diagram">
                <h3>Interactive AI Relationship Diagram</h3>
                <p>Click on each area to learn more about that technology</p>
                
                <div class="venn-container">
                    <div class="venn-circle circle-ai" data-tech="ai">
                        <span>Artificial Intelligence</span>
                    </div>
                    <div class="venn-circle circle-ml" data-tech="ml">
                        <span>Machine Learning</span>
                    </div>
                    <div class="venn-circle circle-dl" data-tech="dl">
                        <span>Deep Learning</span>
                    </div>
                    <div class="venn-circle circle-genai" data-tech="genai">
                        <span>Generative AI</span>
                    </div>
                </div>

                <div class="tech-details" id="tech-details">
                    <div class="detail-card" data-tech="ai">
                        <h4>Artificial Intelligence (AI)</h4>
                        <p>The broadest category encompassing any technique that enables machines to mimic human intelligence and perform tasks that typically require human cognition.</p>
                        <ul>
                            <li>Problem-solving and reasoning</li>
                            <li>Natural language processing</li>
                            <li>Computer vision</li>
                            <li>Expert systems</li>
                        </ul>
                    </div>
                    
                    <div class="detail-card" data-tech="ml">
                        <h4>Machine Learning (ML)</h4>
                        <p>A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed for every task.</p>
                        <ul>
                            <li>Supervised learning</li>
                            <li>Unsupervised learning</li>
                            <li>Reinforcement learning</li>
                            <li>Pattern recognition</li>
                        </ul>
                    </div>
                    
                    <div class="detail-card" data-tech="dl">
                        <h4>Deep Learning (DL)</h4>
                        <p>A subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns in data.</p>
                        <ul>
                            <li>Neural networks</li>
                            <li>Convolutional networks (CNNs)</li>
                            <li>Recurrent networks (RNNs)</li>
                            <li>Transformer architectures</li>
                        </ul>
                    </div>
                    
                    <div class="detail-card" data-tech="genai">
                        <h4>Generative AI</h4>
                        <p>AI systems that can create new content, including text, images, audio, and code, based on patterns learned from training data.</p>
                        <ul>
                            <li>Large Language Models (LLMs)</li>
                            <li>Image generation models</li>
                            <li>Audio synthesis</li>
                            <li>Code generation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="content-grid">
                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3 class="card-title">AI: The Foundation</h3>
                    </div>
                    <div class="card-content">
                        <p>Artificial Intelligence is the overarching field focused on creating intelligent machines. It includes:</p>
                        <ul>
                            <li>Rule-based expert systems</li>
                            <li>Search and optimization algorithms</li>
                            <li>Knowledge representation</li>
                            <li>Logical reasoning systems</li>
                        </ul>
                        <div class="example-box">
                            <strong>Example:</strong> Chess-playing programs that use predefined rules and search algorithms.
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3 class="card-title">ML: Learning from Data</h3>
                    </div>
                    <div class="card-content">
                        <p>Machine Learning enables systems to learn patterns from data without explicit programming:</p>
                        <ul>
                            <li>Statistical pattern recognition</li>
                            <li>Predictive modeling</li>
                            <li>Classification and regression</li>
                            <li>Clustering and dimensionality reduction</li>
                        </ul>
                        <div class="example-box">
                            <strong>Example:</strong> Email spam filters that learn to identify spam based on email characteristics.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 1: Supervised vs Unsupervised Learning -->
        <div class="section" data-section="1">
            <div class="section-header">
                <h2 class="section-title">Supervised vs Unsupervised Learning</h2>
                <p class="section-description">
                    Explore the fundamental differences between supervised and unsupervised machine learning approaches.
                </p>
            </div>

            <div class="learning-comparison">
                <div class="comparison-header">
                    <h3>Machine Learning Task Types</h3>
                </div>
                
                <div class="comparison-content">
                    <div class="learning-card supervised">
                        <h3>Supervised Learning</h3>
                        <div class="learning-icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <p class="learning-description">
                            Learning with labeled examples where the algorithm learns to map inputs to known outputs.
                        </p>
                        
                        <div class="learning-characteristics">
                            <h4>Characteristics:</h4>
                            <ul>
                                <li>Requires labeled training data</li>
                                <li>Goal is to predict outcomes</li>
                                <li>Performance can be measured</li>
                                <li>Examples guide the learning process</li>
                            </ul>
                        </div>
                        
                        <div class="learning-types">
                            <h4>Types:</h4>
                            <div class="type-item">
                                <strong>Classification:</strong> Predicting categories
                                <br><em>Example: Email spam detection</em>
                            </div>
                            <div class="type-item">
                                <strong>Regression:</strong> Predicting continuous values
                                <br><em>Example: House price prediction</em>
                            </div>
                        </div>
                        
                        <div class="learning-examples">
                            <h4>Real-World Applications:</h4>
                            <ul>
                                <li>Medical diagnosis systems</li>
                                <li>Credit scoring</li>
                                <li>Image recognition</li>
                                <li>Language translation</li>
                            </ul>
                        </div>
                    </div>

                    <div class="learning-card unsupervised">
                        <h3>Unsupervised Learning</h3>
                        <div class="learning-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <p class="learning-description">
                            Learning patterns from data without labeled examples, discovering hidden structures.
                        </p>
                        
                        <div class="learning-characteristics">
                            <h4>Characteristics:</h4>
                            <ul>
                                <li>No labeled training data</li>
                                <li>Goal is to discover patterns</li>
                                <li>Exploratory in nature</li>
                                <li>Finds hidden structures</li>
                            </ul>
                        </div>
                        
                        <div class="learning-types">
                            <h4>Types:</h4>
                            <div class="type-item">
                                <strong>Clustering:</strong> Grouping similar data
                                <br><em>Example: Customer segmentation</em>
                            </div>
                            <div class="type-item">
                                <strong>Association:</strong> Finding relationships
                                <br><em>Example: Market basket analysis</em>
                            </div>
                        </div>
                        
                        <div class="learning-examples">
                            <h4>Real-World Applications:</h4>
                            <ul>
                                <li>Customer segmentation</li>
                                <li>Anomaly detection</li>
                                <li>Recommendation systems</li>
                                <li>Data compression</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="interactive-demo">
                <h3>Interactive Learning Demo</h3>
                <div class="demo-container">
                    <div class="demo-section">
                        <h4>Supervised Learning Example</h4>
                        <div class="demo-visual">
                            <div class="data-points supervised-demo">
                                <div class="point positive" title="Positive Example">+</div>
                                <div class="point positive" title="Positive Example">+</div>
                                <div class="point negative" title="Negative Example">-</div>
                                <div class="point negative" title="Negative Example">-</div>
                                <div class="point unknown" title="Unknown - Predict this!">?</div>
                            </div>
                            <p>Algorithm learns from labeled examples (+/-) to predict unknown data (?)</p>
                        </div>
                    </div>
                    
                    <div class="demo-section">
                        <h4>Unsupervised Learning Example</h4>
                        <div class="demo-visual">
                            <div class="data-points unsupervised-demo">
                                <div class="cluster cluster-1">
                                    <div class="point">•</div>
                                    <div class="point">•</div>
                                    <div class="point">•</div>
                                </div>
                                <div class="cluster cluster-2">
                                    <div class="point">•</div>
                                    <div class="point">•</div>
                                    <div class="point">•</div>
                                </div>
                            </div>
                            <p>Algorithm discovers natural groupings in unlabeled data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Generative vs Discriminative AI -->
        <div class="section" data-section="2">
            <div class="section-header">
                <h2 class="section-title">Generative vs Discriminative AI</h2>
                <p class="section-description">
                    Understand the fundamental difference between AI systems that generate new content 
                    versus those that classify or discriminate between existing content.
                </p>
            </div>

            <div class="ai-comparison">
                <div class="comparison-toggle">
                    <button class="toggle-option active" data-view="both">Compare Both</button>
                    <button class="toggle-option" data-view="generative">Generative Only</button>
                    <button class="toggle-option" data-view="discriminative">Discriminative Only</button>
                </div>

                <div class="comparison-content">
                    <div class="ai-card generative">
                        <h3>Generative AI</h3>
                        <div class="ai-icon">
                            <i class="fas fa-magic"></i>
                        </div>
                        
                        <div class="ai-description">
                            <p>Creates new content by learning the underlying patterns and distributions in training data.</p>
                        </div>
                        
                        <div class="ai-capabilities">
                            <h4>What it does:</h4>
                            <ul>
                                <li>Generates new text, images, audio, or code</li>
                                <li>Creates content similar to training data</li>
                                <li>Can produce novel combinations</li>
                                <li>Learns probability distributions</li>
                            </ul>
                        </div>
                        
                        <div class="ai-examples">
                            <h4>Examples:</h4>
                            <div class="example-grid">
                                <div class="example-item">
                                    <i class="fas fa-pen"></i>
                                    <span>Text Generation (GPT, ChatGPT)</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-image"></i>
                                    <span>Image Creation (DALL-E, Midjourney)</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-music"></i>
                                    <span>Music Composition (AIVA, Amper)</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-code"></i>
                                    <span>Code Generation (GitHub Copilot)</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ai-applications">
                            <h4>Business Applications:</h4>
                            <ul>
                                <li>Content creation and marketing</li>
                                <li>Product design and prototyping</li>
                                <li>Personalized recommendations</li>
                                <li>Automated report writing</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ai-card discriminative">
                        <h3>Discriminative AI</h3>
                        <div class="ai-icon">
                            <i class="fas fa-filter"></i>
                        </div>
                        
                        <div class="ai-description">
                            <p>Classifies, categorizes, or makes decisions about existing content by learning decision boundaries.</p>
                        </div>
                        
                        <div class="ai-capabilities">
                            <h4>What it does:</h4>
                            <ul>
                                <li>Classifies data into categories</li>
                                <li>Makes predictions about outcomes</li>
                                <li>Detects patterns and anomalies</li>
                                <li>Learns decision boundaries</li>
                            </ul>
                        </div>
                        
                        <div class="ai-examples">
                            <h4>Examples:</h4>
                            <div class="example-grid">
                                <div class="example-item">
                                    <i class="fas fa-envelope"></i>
                                    <span>Spam Detection</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-user-md"></i>
                                    <span>Medical Diagnosis</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-shield-alt"></i>
                                    <span>Fraud Detection</span>
                                </div>
                                <div class="example-item">
                                    <i class="fas fa-eye"></i>
                                    <span>Image Recognition</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ai-applications">
                            <h4>Business Applications:</h4>
                            <ul>
                                <li>Quality control and inspection</li>
                                <li>Risk assessment and scoring</li>
                                <li>Customer behavior analysis</li>
                                <li>Security and surveillance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="knowledge-check">
                <h3>Knowledge Check</h3>
                <div class="quiz-question">
                    <p class="question-text">Which type of AI would be most appropriate for creating personalized marketing content for different customer segments?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-answer="correct">
                            Generative AI - it can create new, personalized content based on learned patterns from existing marketing materials
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Discriminative AI - it can classify customers into different segments for targeted marketing
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Both types are equally suitable for this task
                        </div>
                        <div class="quiz-option" data-answer="incorrect">
                            Neither type is appropriate for marketing content creation
                        </div>
                    </div>
                    <div class="quiz-feedback">
                        <p><strong>Correct!</strong> Generative AI is ideal for creating personalized marketing content because it can generate new text, images, or other content tailored to specific customer segments. While discriminative AI could help classify customers into segments, generative AI actually creates the personalized content for each segment.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// Additional modules (4, 5, 6) would be implemented similarly...
// For brevity, I'll create placeholder implementations

DataScienceCourse.prototype.getModule4HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">Evolution Timeline (1940s-Present)</h1>
            <h2 class="module-subtitle">Historical Progression and Key Innovations</h2>
            <p class="module-description">
                Journey through the decades to see how data science evolved from early computing 
                to modern AI, exploring key innovations and their impact on the field.
            </p>
        </div>
        <!-- Module 4 content would be implemented here with interactive timeline -->
        <div class="coming-soon">
            <h3>Module 4: Evolution Timeline</h3>
            <p>This module will feature an interactive timeline showing the evolution of data science from the 1940s to present, including key milestones, innovations, and their impacts.</p>
        </div>
    `;
};

DataScienceCourse.prototype.getModule5HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">Large Language Models Deep Dive</h1>
            <h2 class="module-subtitle">Understanding LLM Behavior and Capabilities</h2>
            <p class="module-description">
                Explore how Large Language Models work, their behavior patterns, capabilities, 
                limitations, and practical applications in various domains.
            </p>
        </div>
        <!-- Module 5 content would be implemented here with LLM demonstrations -->
        <div class="coming-soon">
            <h3>Module 5: Large Language Models</h3>
            <p>This module will include interactive demonstrations of LLM behavior, hallucination examples, and practical applications in text and code generation.</p>
        </div>
    `;
};

DataScienceCourse.prototype.getModule6HTML = function() {
    return `
        <div class="module-header">
            <h1 class="module-title">Real-World Applications and Future</h1>
            <h2 class="module-subtitle">Industry Applications and Future Implications</h2>
            <p class="module-description">
                Discover how data science and AI are transforming industries and explore 
                future trends, ethical considerations, and career opportunities.
            </p>
        </div>
        <!-- Module 6 content would be implemented here with industry case studies -->
        <div class="coming-soon">
            <h3>Module 6: Applications and Future</h3>
            <p>This module will showcase real-world applications across industries, case studies, and future implications of data science and AI technologies.</p>
        </div>
    `;
};

