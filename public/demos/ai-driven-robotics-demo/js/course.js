// Course Content Data
const courseContent = {
    // Welcome Page
    '0': `
        <div class="content-section">
            <div class="hero">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80" alt="AI Robot" class="banner-image" style="max-width: 700px; margin: 0 auto 30px;">
                <h1>AI-Driven Robotics: Reinforcement Learning</h1>
                <p class="hero-subtitle">Explore how reinforcement learning algorithms are revolutionizing robotic applications in manipulation, locomotion, and navigation</p>
                <div class="divider" style="margin: 0 auto 30px;"></div>
                <div class="hero-features">
                    <div class="hero-feature"><i class="fas fa-clock"></i> 45-60 minutes</div>
                    <div class="hero-feature"><i class="fas fa-layer-group"></i> 6 Modules</div>
                    <div class="hero-feature"><i class="fas fa-tasks"></i> 3 Activities</div>
                    <div class="hero-feature"><i class="fas fa-award"></i> Certificate</div>
                </div>
                <button class="start-btn" onclick="navigateToLesson('1-1')">Start Learning <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `,

    // Module 1: Foundations
    '1-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-cube"></i> What is Reinforcement Learning?</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Define reinforcement learning and its key characteristics</li>
                    <li>Explain how RL differs from other machine learning approaches</li>
                    <li>Identify the basic components of an RL system</li>
                </ul>
            </div>

            <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80" alt="Robot arm learning" class="banner-image">

            <p>Reinforcement Learning (RL) is a type of machine learning where an <strong>agent</strong> learns to make decisions by interacting with an <strong>environment</strong>. Unlike supervised learning, RL doesn't require labeled data—instead, the agent learns through trial and error, receiving <strong>rewards</strong> or penalties based on its actions.</p>

            <div class="info-box">
                <h4><i class="fas fa-lightbulb"></i> Key Insight</h4>
                <p>Think of RL like teaching a dog new tricks—you reward good behavior and discourage bad behavior. Over time, the dog learns which actions lead to treats!</p>
            </div>

            <h3 style="margin: 30px 0 20px;">How RL Differs from Other Approaches</h3>

            <div class="tabs-container">
                <div class="tabs-nav">
                    <button class="tab-btn active" data-tab="supervised">Supervised Learning</button>
                    <button class="tab-btn" data-tab="unsupervised">Unsupervised Learning</button>
                    <button class="tab-btn" data-tab="reinforcement">Reinforcement Learning</button>
                </div>
                <div class="tab-content active" id="tab-supervised">
                    <div class="card">
                        <h4>Supervised Learning</h4>
                        <p>Learns from labeled examples. Given input-output pairs, the model learns to predict outputs for new inputs.</p>
                        <div class="card-example"><i class="fas fa-image"></i> Example: Image classification with labeled photos</div>
                    </div>
                </div>
                <div class="tab-content" id="tab-unsupervised">
                    <div class="card">
                        <h4>Unsupervised Learning</h4>
                        <p>Finds patterns in unlabeled data. No explicit feedback is provided about what the correct output should be.</p>
                        <div class="card-example"><i class="fas fa-project-diagram"></i> Example: Customer segmentation clustering</div>
                    </div>
                </div>
                <div class="tab-content" id="tab-reinforcement">
                    <div class="card">
                        <h4>Reinforcement Learning</h4>
                        <p>Learns through interaction and feedback. The agent takes actions and receives rewards, learning to maximize cumulative reward over time.</p>
                        <div class="card-example"><i class="fas fa-robot"></i> Example: Robot learning to walk through trial and error</div>
                    </div>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Why RL for Robotics?</h3>
            <p>RL is particularly powerful for robotics because:</p>
            <ul style="margin: 15px 0 0 20px; color: var(--text-secondary);">
                <li>Robots can learn complex behaviors without explicit programming</li>
                <li>Policies adapt to changing environments</li>
                <li>No need for exhaustive human demonstrations</li>
                <li>Can discover novel solutions humans might not think of</li>
            </ul>
        </div>
    `,

    '1-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-cog"></i> Core Components of RL</h2>
            <div class="divider"></div>

            <p>Every reinforcement learning system consists of four fundamental components that work together in a continuous cycle. Understanding these is essential for designing effective robotic learning systems.</p>

            <!-- SVG Diagram: RL Cycle -->
            <div class="concept-visual">
                <svg viewBox="0 0 500 300" class="svg-diagram" style="max-width: 500px;">
                    <!-- Agent -->
                    <circle cx="250" cy="60" r="45" fill="#0066CC" opacity="0.9"/>
                    <text x="250" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">AGENT</text>
                    <text x="250" y="70" text-anchor="middle" fill="white" font-size="10">(Robot)</text>

                    <!-- Environment -->
                    <rect x="150" y="180" width="200" height="80" rx="10" fill="#10b981" opacity="0.9"/>
                    <text x="250" y="215" text-anchor="middle" fill="white" font-size="12" font-weight="bold">ENVIRONMENT</text>
                    <text x="250" y="235" text-anchor="middle" fill="white" font-size="10">(World)</text>

                    <!-- Arrows and Labels -->
                    <!-- Action arrow (down-right) -->
                    <path d="M 290 95 Q 380 140 340 180" stroke="#FF6600" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                    <text x="360" y="130" fill="#FF6600" font-size="11" font-weight="bold">Action</text>

                    <!-- State arrow (up-left) -->
                    <path d="M 160 180 Q 120 140 210 95" stroke="#0066CC" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                    <text x="100" y="130" fill="#0066CC" font-size="11" font-weight="bold">State</text>

                    <!-- Reward arrow -->
                    <path d="M 180 180 Q 150 150 220 105" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#arrowhead)" stroke-dasharray="5,3"/>
                    <text x="130" y="160" fill="#f59e0b" font-size="11" font-weight="bold">Reward</text>

                    <!-- Arrow marker -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
                        </marker>
                    </defs>
                </svg>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 15px;">The RL feedback loop: Agent observes state, takes action, receives reward</p>
            </div>

            <div class="card-grid">
                <div class="card">
                    <div class="card-icon blue"><i class="fas fa-map-marker-alt"></i></div>
                    <h4>States</h4>
                    <p>The current situation or configuration of the environment that the agent observes.</p>
                    <div class="card-example"><i class="fas fa-robot"></i> <strong>Example:</strong> Robot's joint angles, position, or sensor readings</div>
                </div>
                <div class="card">
                    <div class="card-icon green"><i class="fas fa-play"></i></div>
                    <h4>Actions</h4>
                    <p>The set of possible moves or decisions the agent can make in any given state.</p>
                    <div class="card-example"><i class="fas fa-hand-paper"></i> <strong>Example:</strong> Moving joints, activating grippers</div>
                </div>
                <div class="card">
                    <div class="card-icon orange"><i class="fas fa-trophy"></i></div>
                    <h4>Rewards</h4>
                    <p>Numerical feedback signals indicating how desirable an action was.</p>
                    <div class="card-example"><i class="fas fa-cube"></i> <strong>Example:</strong> +10 for grasping object, -5 for dropping it</div>
                </div>
                <div class="card">
                    <div class="card-icon purple"><i class="fas fa-brain"></i></div>
                    <h4>Policies</h4>
                    <p>The strategy or rules that guide the agent's action selection.</p>
                    <div class="card-example"><i class="fas fa-network-wired"></i> <strong>Example:</strong> Neural network mapping states to actions</div>
                </div>
            </div>

            <div class="info-box">
                <h4><i class="fas fa-lightbulb"></i> Real-World Application</h4>
                <p>In robot maze navigation: <strong>State</strong> = current position, <strong>Actions</strong> = move directions, <strong>Rewards</strong> = reaching goal (+100) or hitting wall (-10), <strong>Policy</strong> = learned direction selection strategy.</p>
            </div>
        </div>
    `,

    '1-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 1</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-1">
                <div class="quiz-question" data-question="1">
                    <h4>1. What makes reinforcement learning different from supervised learning?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q1" value="a">
                            <span class="option-marker">A</span>
                            <span>RL requires more labeled training data</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q1" value="b">
                            <span class="option-marker">B</span>
                            <span>RL learns through interaction and rewards rather than labeled examples</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q1" value="c">
                            <span class="option-marker">C</span>
                            <span>RL can only be used for classification tasks</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question" data-question="2">
                    <h4>2. In RL terminology, what is a "policy"?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2" value="a">
                            <span class="option-marker">A</span>
                            <span>The reward signal from the environment</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2" value="b">
                            <span class="option-marker">B</span>
                            <span>The current state of the robot</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q2" value="c">
                            <span class="option-marker">C</span>
                            <span>A strategy that maps states to actions</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question" data-question="3">
                    <h4>3. Which component provides feedback about action quality?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3" value="a">
                            <span class="option-marker">A</span>
                            <span>State</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q3" value="b">
                            <span class="option-marker">B</span>
                            <span>Reward</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3" value="c">
                            <span class="option-marker">C</span>
                            <span>Action</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-1')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-1"></div>
            </div>
        </div>
    `,

    // Module 2: How Robots Learn
    '2-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-sync-alt"></i> The RL Process</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Describe the cyclical nature of reinforcement learning</li>
                    <li>Explain how robots improve through trial and error</li>
                    <li>Understand the interaction between agent and environment</li>
                </ul>
            </div>

            <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&q=80" alt="Industrial Robot Arm" class="banner-image">

            <p>Reinforcement learning is fundamentally an iterative process. The agent continuously interacts with the environment, learning from each experience to improve its decision-making over time.</p>

            <h3 style="margin: 30px 0 20px;">The Learning Cycle</h3>

            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>Agent Observes State</h4>
                        <p>The robot perceives its current situation through sensors—joint positions, camera images, or other inputs.</p>
                    </div>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Agent Selects Action</h4>
                        <p>Based on its current policy, the robot chooses an action to take in the environment.</p>
                    </div>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Environment Responds</h4>
                        <p>The environment transitions to a new state based on the robot's action.</p>
                    </div>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>Agent Receives Reward</h4>
                        <p>A reward signal indicates how good or bad the action was for achieving the goal.</p>
                    </div>
                </div>
                <div class="process-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <h4>Agent Updates Policy</h4>
                        <p>The robot adjusts its strategy to maximize future rewards based on this experience.</p>
                    </div>
                </div>
            </div>

            <div class="info-box">
                <h4><i class="fas fa-lightbulb"></i> The Trial and Error Process</h4>
                <p>Through repeated cycles, robots gradually optimize their decision-making. For example, a robotic arm learns optimal grasping by attempting different approaches, receiving positive rewards for successful grasps, and improving its policy with each iteration.</p>
            </div>
        </div>
    `,

    '2-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-code-branch"></i> Core RL Algorithms</h2>
            <div class="divider"></div>

            <p>Different RL algorithms are suited for different robotic tasks. Understanding the three main categories helps you choose the right approach for your application.</p>

            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header">
                        <span><i class="fas fa-table-cells" style="color: var(--primary); margin-right: 10px;"></i> Value-Based Methods</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-body">
                        <p>Estimate the value of being in a particular state or taking a specific action.</p>
                        <p style="margin-top: 15px;"><strong>Key Algorithms:</strong></p>
                        <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                            <li>Q-learning</li>
                            <li>Deep Q-Networks (DQN)</li>
                        </ul>
                        <div class="card-example" style="margin-top: 15px;">
                            <i class="fas fa-robot"></i> <strong>Application:</strong> Robotic navigation tasks and learning optimal grasp points
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header">
                        <span><i class="fas fa-arrow-trend-up" style="color: var(--success); margin-right: 10px;"></i> Policy-Based Methods</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-body">
                        <p>Directly optimize the policy without using a value function.</p>
                        <p style="margin-top: 15px;"><strong>Key Algorithms:</strong></p>
                        <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                            <li>Policy Gradient methods</li>
                            <li>REINFORCE algorithm</li>
                        </ul>
                        <div class="card-example" style="margin-top: 15px;">
                            <i class="fas fa-hand-paper"></i> <strong>Application:</strong> Continuous control tasks like robotic manipulation
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header">
                        <span><i class="fas fa-people-arrows" style="color: #8b5cf6; margin-right: 10px;"></i> Actor-Critic Methods</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-body">
                        <p>Combine value-based and policy-based approaches for better stability and efficiency.</p>
                        <p style="margin-top: 15px;"><strong>Key Algorithms:</strong></p>
                        <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                            <li>A3C (Asynchronous Advantage Actor-Critic)</li>
                            <li>DDPG (Deep Deterministic Policy Gradient)</li>
                            <li>PPO (Proximal Policy Optimization)</li>
                        </ul>
                        <div class="card-example" style="margin-top: 15px;">
                            <i class="fas fa-cogs"></i> <strong>Application:</strong> Complex robotic tasks due to stability and sample efficiency
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-box">
                <h4><i class="fas fa-lightbulb"></i> Choosing the Right Algorithm</h4>
                <p>For a robotic grasping task: <strong>DQN</strong> (value-based) might learn optimal grasp points, while a <strong>Policy Gradient method</strong> could handle continuous control of joint angles. <strong>Actor-Critic</strong> methods often provide the best balance for complex real-world tasks.</p>
            </div>
        </div>
    `,

    '2-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 2</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-2">
                <div class="quiz-question">
                    <h4>1. What is the correct order of the RL learning cycle?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q2-1" value="a">
                            <span class="option-marker">A</span>
                            <span>Observe State → Select Action → Environment Responds → Receive Reward → Update Policy</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2-1" value="b">
                            <span class="option-marker">B</span>
                            <span>Select Action → Receive Reward → Observe State → Update Policy</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2-1" value="c">
                            <span class="option-marker">C</span>
                            <span>Update Policy → Select Action → Observe State → Receive Reward</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. Which algorithm category is best for continuous control tasks?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2-2" value="a">
                            <span class="option-marker">A</span>
                            <span>Value-based methods only</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q2-2" value="b">
                            <span class="option-marker">B</span>
                            <span>Policy-based or Actor-Critic methods</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q2-2" value="c">
                            <span class="option-marker">C</span>
                            <span>Q-learning exclusively</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-2')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-2"></div>
            </div>
        </div>
    `,

    // Module 3: Challenges & Design
    '3-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-exclamation-triangle"></i> Real-World Challenges</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Identify the main challenges in applying RL to robotics</li>
                    <li>Explain solutions for each challenge</li>
                    <li>Understand the importance of sample efficiency and safety</li>
                </ul>
            </div>

            <div class="image-grid two-col" style="margin-bottom: 25px;">
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&q=80" alt="Robot in manufacturing">
                    <div class="caption">Real robots face unpredictable conditions</div>
                </div>
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1563968743333-044cef800494?w=800&q=80" alt="Complex machinery">
                    <div class="caption">Complex environments require robust solutions</div>
                </div>
            </div>

            <p>While RL offers powerful capabilities for robotics, several real-world challenges must be addressed for successful deployment.</p>

            <div class="card-grid" style="grid-template-columns: 1fr;">
                <div class="card" style="border-left: 4px solid #ef4444;">
                    <h4><i class="fas fa-tachometer-alt" style="color: #ef4444; margin-right: 10px;"></i> Sample Efficiency</h4>
                    <p>Real-world interactions with robots are costly and time-consuming. Unlike simulations, physical robots can't run millions of trials quickly.</p>
                    <div class="card-example"><i class="fas fa-lightbulb"></i> <strong>Solution:</strong> Model-based approaches and learning from fewer samples through efficient algorithms</div>
                </div>

                <div class="card" style="border-left: 4px solid #f59e0b;">
                    <h4><i class="fas fa-exchange-alt" style="color: #f59e0b; margin-right: 10px;"></i> Sim-to-Real Transfer</h4>
                    <p>Policies learned in simulation often perform poorly on real robots due to the "reality gap"—differences between simulated and real physics.</p>
                    <div class="card-example"><i class="fas fa-lightbulb"></i> <strong>Solution:</strong> Domain randomization to create more robust policies</div>
                </div>

                <div class="card" style="border-left: 4px solid #10b981;">
                    <h4><i class="fas fa-project-diagram" style="color: #10b981; margin-right: 10px;"></i> High-Dimensional Action Spaces</h4>
                    <p>Many robotic tasks involve continuous control of multiple joints, creating complex action spaces that are difficult to explore efficiently.</p>
                    <div class="card-example"><i class="fas fa-lightbulb"></i> <strong>Solution:</strong> Hierarchical RL to decompose complex tasks</div>
                </div>

                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-eye-slash" style="color: var(--primary); margin-right: 10px;"></i> Partial Observability</h4>
                    <p>Robots often have incomplete information about their environment—sensors have limitations, objects may be occluded.</p>
                    <div class="card-example"><i class="fas fa-lightbulb"></i> <strong>Solution:</strong> Memory-based policies and belief state estimation</div>
                </div>

                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-shield-alt" style="color: #8b5cf6; margin-right: 10px;"></i> Safety Constraints</h4>
                    <p>Ensuring safe exploration and operation during learning is critical—robots can damage themselves, their environment, or harm humans.</p>
                    <div class="card-example"><i class="fas fa-lightbulb"></i> <strong>Solution:</strong> Safe RL methods with constraint satisfaction during learning</div>
                </div>
            </div>
        </div>
    `,

    '3-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-puzzle-piece"></i> Activity: Design a Reward Function</h2>
            <div class="divider"></div>

            <div class="activity-box">
                <h3><i class="fas fa-trophy"></i> Hands-On Challenge</h3>
                <p>Design rewards for a robotic pick-and-place task. Consider what behaviors you want to encourage and discourage.</p>
            </div>

            <h3 style="margin: 30px 0 20px;">The Scenario</h3>
            <p>A robotic arm must pick up an object from a table and place it in a target location. The task involves:</p>

            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number" style="background: var(--primary);">1</div>
                    <div class="step-content"><h4>Approach Object</h4><p>Move gripper toward the target object</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number" style="background: var(--success);">2</div>
                    <div class="step-content"><h4>Grasp Object</h4><p>Close gripper around the object securely</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number" style="background: var(--secondary);">3</div>
                    <div class="step-content"><h4>Move to Target</h4><p>Transport object to placement location</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number" style="background: #8b5cf6;">4</div>
                    <div class="step-content"><h4>Place Object</h4><p>Release object at target position</p></div>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Example Reward Structure</h3>
            <div class="card-grid">
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4>Successful Grasp</h4>
                    <p style="font-size: 1.5rem; color: var(--success); font-weight: bold;">+10</p>
                </div>
                <div class="card" style="border-left: 4px solid #ef4444;">
                    <h4>Object Dropped</h4>
                    <p style="font-size: 1.5rem; color: #ef4444; font-weight: bold;">-5</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4>Task Completed</h4>
                    <p style="font-size: 1.5rem; color: var(--success); font-weight: bold;">+50</p>
                </div>
                <div class="card" style="border-left: 4px solid #f59e0b;">
                    <h4>Distance to Target</h4>
                    <p style="font-size: 1.5rem; color: #f59e0b; font-weight: bold;">-0.1/cm</p>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Reward Shaping Tips</h3>
            <ul style="margin: 0 0 0 20px; color: var(--text-secondary);">
                <li><strong>Sparse vs Dense:</strong> Balance final rewards with intermediate feedback</li>
                <li><strong>Magnitude Matters:</strong> Scale rewards appropriately to guide behavior</li>
                <li><strong>Timing is Key:</strong> Immediate feedback for critical actions</li>
                <li><strong>Avoid Shortcuts:</strong> Prevent unintended exploitation of rewards</li>
            </ul>

            <div class="info-box" style="margin-top: 30px;">
                <h4><i class="fas fa-question-circle"></i> Your Challenge</h4>
                <p>Consider: What additional rewards would you add? How would you prevent the robot from finding "shortcuts" that game the reward system without actually completing the task properly?</p>
            </div>
        </div>
    `,

    '3-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 3</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-3">
                <div class="quiz-question">
                    <h4>1. What is "sim-to-real transfer" in robotics RL?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q3-1" value="a">
                            <span class="option-marker">A</span>
                            <span>Transferring policies learned in simulation to real physical robots</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3-1" value="b">
                            <span class="option-marker">B</span>
                            <span>Simulating real robots in virtual environments</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3-1" value="c">
                            <span class="option-marker">C</span>
                            <span>Converting simulation code to robot hardware</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. Why is reward shaping important?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3-2" value="a">
                            <span class="option-marker">A</span>
                            <span>It makes the reward signal look visually appealing</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q3-2" value="b">
                            <span class="option-marker">B</span>
                            <span>It guides learning by providing intermediate feedback toward goals</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q3-2" value="c">
                            <span class="option-marker">C</span>
                            <span>It reduces the number of sensors needed</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-3')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-3"></div>
            </div>
        </div>
    `,

    // Module 4: Applications
    '4-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-hand-paper"></i> Robotic Manipulation</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Understand how RL enables autonomous grasping</li>
                    <li>Describe key research breakthroughs in manipulation</li>
                    <li>Identify benefits of RL over traditional approaches</li>
                </ul>
            </div>

            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="Robotic arm in laboratory" class="banner-image">

            <p>Reinforcement learning is transforming robotic manipulation by enabling systems to learn complex grasping and object handling without human demonstrations. Modern robots can now learn to pick up objects of various shapes, weights, and textures through trial and error, developing strategies that often surpass hand-coded solutions.</p>

            <h3 style="margin: 30px 0 20px;">Case Studies</h3>

            <div class="card" style="margin-bottom: 20px; border-left: 4px solid var(--primary);">
                <h4><i class="fas fa-flask" style="color: var(--primary); margin-right: 10px;"></i> Autonomous Grasping (Kilinc & Montana, 2021)</h4>
                <p style="margin: 15px 0;">Developed a novel approach that doesn't require human demonstrations for robotic grasping.</p>
                <ul style="margin: 0 0 0 20px; color: var(--text-secondary);">
                    <li>Uses simulated locomotion demonstrations to train robotic arm</li>
                    <li>Generates better policies than traditional methods</li>
                    <li>Significantly increases sample efficiency</li>
                    <li>Eliminates need for human intervention in training</li>
                </ul>
            </div>

            <div class="card" style="border-left: 4px solid var(--success);">
                <h4><i class="fas fa-utensils" style="color: var(--success); margin-right: 10px;"></i> Dynamic Task Learning (Kormushev et al., 2013)</h4>
                <p style="margin: 15px 0;">Demonstrated RL for a complex pancake flipping task.</p>
                <ul style="margin: 0 0 0 20px; color: var(--text-secondary);">
                    <li>Robot learns to adjust motion based on previous attempts</li>
                    <li>Gradually improves performance through trial and error</li>
                    <li>Masters complex, dynamic manipulation skills</li>
                    <li>Adapts to changing physical conditions</li>
                </ul>
            </div>

            <h3 style="margin: 30px 0 20px;">Key Benefits</h3>
            <div class="card-grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="card"><h4><i class="fas fa-robot" style="color: var(--primary);"></i> No Human Demos</h4><p>Eliminates costly demonstration collection</p></div>
                <div class="card"><h4><i class="fas fa-chart-line" style="color: var(--success);"></i> Sample Efficient</h4><p>Faster learning with fewer trials</p></div>
                <div class="card"><h4><i class="fas fa-sync-alt" style="color: #8b5cf6;"></i> Adaptive</h4><p>Continuous improvement from outcomes</p></div>
                <div class="card"><h4><i class="fas fa-cogs" style="color: var(--secondary);"></i> Complex Skills</h4><p>Masters dynamic manipulation tasks</p></div>
            </div>
        </div>
    `,

    '4-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-running"></i> Locomotion Breakthroughs</h2>
            <div class="divider"></div>

            <div class="image-grid two-col" style="margin-bottom: 25px;">
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&q=80" alt="Robot dog">
                    <div class="caption">Quadruped robots learning to walk</div>
                </div>
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80" alt="Humanoid robot">
                    <div class="caption">Humanoid robots mastering bipedal motion</div>
                </div>
            </div>

            <p>Reinforcement learning has revolutionized how robots learn to walk, enabling adaptive gaits that can navigate diverse terrains without explicit programming.</p>

            <div class="card" style="margin: 25px 0; border-left: 4px solid #f59e0b;">
                <h4><i class="fas fa-dog" style="color: #f59e0b; margin-right: 10px;"></i> Boston Dynamics' Spot</h4>
                <p style="margin: 15px 0;">The famous quadruped robot uses RL in its locomotion control system.</p>
                <ul style="margin: 0 0 0 20px; color: var(--text-secondary);">
                    <li>RL integrated into locomotion control system</li>
                    <li>Adaptive gait for various terrains and obstacles</li>
                    <li>Real-time response to environmental changes</li>
                </ul>
            </div>

            <div class="card" style="margin: 25px 0; border-left: 4px solid var(--primary);">
                <h4><i class="fas fa-user" style="color: var(--primary); margin-right: 10px;"></i> Figure AI's Humanoid Locomotion</h4>
                <p style="margin: 15px 0;">End-to-end reinforcement learning for bipedal walking.</p>
                <ul style="margin: 0 0 0 20px; color: var(--text-secondary);">
                    <li>End-to-end reinforcement learning approach</li>
                    <li>Trained purely in simulation environments</li>
                    <li>Develops natural walking controllers</li>
                    <li>Enables rapid engineering iteration</li>
                </ul>
            </div>

            <h3 style="margin: 30px 0 20px;">Key Benefits of RL in Locomotion</h3>
            <div class="card-grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="card"><i class="fas fa-check-circle" style="color: var(--success);"></i> Quick adaptation to terrain changes</div>
                <div class="card"><i class="fas fa-check-circle" style="color: var(--success);"></i> Robust to unexpected obstacles</div>
                <div class="card"><i class="fas fa-check-circle" style="color: var(--success);"></i> Reduced engineering time</div>
                <div class="card"><i class="fas fa-check-circle" style="color: var(--success);"></i> Natural movement patterns</div>
            </div>
        </div>
    `,

    '4-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-trophy"></i> Activity: Navigation Challenge</h2>
            <div class="divider"></div>

            <div class="activity-box">
                <h3><i class="fas fa-warehouse"></i> Warehouse Navigation Challenge</h3>
                <p>Design a reinforcement learning solution to help a warehouse robot navigate through a dynamic environment with moving obstacles.</p>
            </div>

            <h3 style="margin: 30px 0 20px;">Your Design Tasks</h3>

            <div class="card-grid" style="grid-template-columns: 1fr;">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> 1. Define the State Space</h4>
                    <p>What information does the robot need to observe?</p>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                        <li>Robot position (x, y coordinates)</li>
                        <li>Obstacle locations (static and dynamic)</li>
                        <li>Goal position</li>
                        <li>Velocity information</li>
                    </ul>
                </div>

                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4><i class="fas fa-arrows-alt" style="color: var(--success);"></i> 2. Design the Action Space</h4>
                    <p>What actions can the robot take?</p>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                        <li>Movement directions (up, down, left, right, diagonal)</li>
                        <li>Speed levels (fast, medium, slow)</li>
                        <li>Wait action (for dynamic obstacles)</li>
                    </ul>
                </div>

                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <h4><i class="fas fa-star" style="color: var(--secondary);"></i> 3. Create a Reward Function</h4>
                    <p>How do you incentivize good behavior?</p>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                        <li>Reaching goal: +100</li>
                        <li>Collision: -50</li>
                        <li>Time penalty: -1 per step</li>
                        <li>Progress toward goal: small positive</li>
                    </ul>
                </div>

                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-brain" style="color: #8b5cf6;"></i> 4. Select an Algorithm</h4>
                    <p>Which RL approach would work best?</p>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary);">
                        <li>Q-learning for discrete navigation</li>
                        <li>DQN for visual input</li>
                        <li>PPO for continuous control</li>
                    </ul>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <h4><i class="fas fa-lightbulb"></i> Expert Tip</h4>
                <p>Fetch Robotics uses multi-agent RL to coordinate multiple robots in warehouses. Consider how your solution might scale to multiple robots working together!</p>
            </div>
        </div>
    `,

    '4-4': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 4</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-4">
                <div class="quiz-question">
                    <h4>1. What advantage did Kilinc & Montana's approach have over traditional methods?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q4-1" value="a">
                            <span class="option-marker">A</span>
                            <span>It eliminated the need for human demonstrations</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q4-1" value="b">
                            <span class="option-marker">B</span>
                            <span>It required more training data</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q4-1" value="c">
                            <span class="option-marker">C</span>
                            <span>It only worked in simulation</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. How does Boston Dynamics' Spot use RL?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q4-2" value="a">
                            <span class="option-marker">A</span>
                            <span>Only for object recognition</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q4-2" value="b">
                            <span class="option-marker">B</span>
                            <span>For adaptive locomotion control across different terrains</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q4-2" value="c">
                            <span class="option-marker">C</span>
                            <span>Only for battery management</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-4')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-4"></div>
            </div>
        </div>
    `,

    // Module 5: Advanced Techniques
    '5-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-brain"></i> Deep Reinforcement Learning</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Explain how deep learning enhances RL</li>
                    <li>Describe key deep RL architectures</li>
                    <li>Understand end-to-end learning from sensory input</li>
                </ul>
            </div>

            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" alt="AI Neural Network Brain" class="banner-image">

            <p>Deep RL combines deep neural networks with reinforcement learning, enabling robots to learn directly from raw sensory inputs like camera images without manual feature engineering. This breakthrough allows robots to see and understand their environment much like humans do, processing visual information to make intelligent decisions.</p>

            <h3 style="margin: 30px 0 20px;">The Deep RL Pipeline</h3>
            <div class="process-steps" style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
                <div class="card" style="flex: 1; min-width: 200px; text-align: center;">
                    <i class="fas fa-camera" style="font-size: 2rem; color: var(--success);"></i>
                    <h4 style="margin-top: 15px;">Raw Input</h4>
                    <p style="font-size: 0.9rem;">Camera images, point clouds, sensor data</p>
                </div>
                <div style="display: flex; align-items: center; color: var(--secondary); font-size: 2rem;">→</div>
                <div class="card" style="flex: 1; min-width: 200px; text-align: center;">
                    <i class="fas fa-project-diagram" style="font-size: 2rem; color: #8b5cf6;"></i>
                    <h4 style="margin-top: 15px;">Neural Network</h4>
                    <p style="font-size: 0.9rem;">No manual feature engineering</p>
                </div>
                <div style="display: flex; align-items: center; color: var(--secondary); font-size: 2rem;">→</div>
                <div class="card" style="flex: 1; min-width: 200px; text-align: center;">
                    <i class="fas fa-robot" style="font-size: 2rem; color: var(--secondary);"></i>
                    <h4 style="margin-top: 15px;">Actions</h4>
                    <p style="font-size: 0.9rem;">Grasping, navigation, manipulation</p>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Key Deep RL Methods</h3>
            <div class="card-grid">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-eye" style="color: var(--primary);"></i> Deep Q-Networks (DQN)</h4>
                    <p>CNNs approximate Q-function, enabling learning from visual inputs</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4><i class="fas fa-cogs" style="color: var(--success);"></i> Policy Gradient (TRPO/PPO)</h4>
                    <p>Complex motor skills in humanoid robots and robotic arms</p>
                </div>
                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-balance-scale" style="color: #8b5cf6;"></i> Actor-Critic (A3C)</h4>
                    <p>Continuous action spaces in robotic control tasks</p>
                </div>
                <div class="card" style="border-left: 4px solid #f59e0b;">
                    <h4><i class="fas fa-sitemap" style="color: #f59e0b;"></i> Hierarchical RL</h4>
                    <p>Decompose complex tasks into simpler subtasks</p>
                </div>
            </div>
        </div>
    `,

    '5-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-network-wired"></i> Multi-Agent RL</h2>
            <div class="divider"></div>

            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" alt="Warehouse robots" class="banner-image">

            <p>Multi-Agent Reinforcement Learning (MARL) enables multiple robots to learn collaborative behaviors, essential for warehouse automation, swarm robotics, and coordinated tasks. When multiple robots work together, they can accomplish tasks that would be impossible for a single robot, learning to communicate and coordinate without explicit programming.</p>

            <h3 style="margin: 30px 0 20px;">Key Approaches</h3>
            <div class="card-grid" style="grid-template-columns: 1fr;">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-server" style="color: var(--primary);"></i> Centralized Training, Decentralized Execution</h4>
                    <p>Efficient learning with scalable deployment. Train with global information, execute with local observations.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4><i class="fas fa-comments" style="color: var(--success);"></i> Communication Protocols</h4>
                    <p>Learned protocols enable effective information sharing between robots without explicit programming.</p>
                </div>
                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-chess" style="color: #8b5cf6;"></i> Opponent Modeling</h4>
                    <p>Agents adapt to behavior of other robots in dynamic, multi-agent environments.</p>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Real-World Applications</h3>
            <div class="card-grid">
                <div class="card">
                    <h4><i class="fas fa-warehouse" style="color: #f59e0b;"></i> Warehouse Automation</h4>
                    <p>Fetch Robotics uses MARL for optimized navigation and task allocation</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-project-diagram" style="color: #ef4444;"></i> Swarm Robotics</h4>
                    <p>Emergent behaviors like flocking, foraging, self-assembly</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-tasks" style="color: var(--primary);"></i> Task Allocation</h4>
                    <p>Efficient distribution among heterogeneous robot teams</p>
                </div>
            </div>
        </div>
    `,

    '5-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-exchange-alt"></i> Transfer Learning</h2>
            <div class="divider"></div>

            <!-- SVG Illustration: Sim to Real -->
            <div class="concept-visual">
                <svg viewBox="0 0 600 200" class="svg-diagram" style="max-width: 600px;">
                    <!-- Simulation Box -->
                    <rect x="30" y="40" width="180" height="120" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="120" y="75" text-anchor="middle" fill="#8b5cf6" font-size="14" font-weight="bold">SIMULATION</text>
                    <rect x="60" y="90" width="50" height="40" rx="5" fill="#8b5cf6" opacity="0.6"/>
                    <rect x="130" y="90" width="50" height="40" rx="5" fill="#8b5cf6" opacity="0.6"/>
                    <text x="85" y="115" text-anchor="middle" fill="white" font-size="10">Train</text>
                    <text x="155" y="115" text-anchor="middle" fill="white" font-size="10">Test</text>

                    <!-- Arrow -->
                    <path d="M 230 100 L 360 100" stroke="#FF6600" stroke-width="4" fill="none"/>
                    <polygon points="360,100 345,92 345,108" fill="#FF6600"/>
                    <text x="295" y="85" text-anchor="middle" fill="#FF6600" font-size="12" font-weight="bold">Transfer</text>
                    <text x="295" y="125" text-anchor="middle" fill="var(--text-secondary)" font-size="10">Domain Randomization</text>

                    <!-- Real World Box -->
                    <rect x="380" y="40" width="180" height="120" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="470" y="75" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">REAL WORLD</text>
                    <circle cx="430" cy="115" r="25" fill="#10b981" opacity="0.6"/>
                    <circle cx="510" cy="115" r="25" fill="#10b981" opacity="0.6"/>
                    <text x="430" y="118" text-anchor="middle" fill="white" font-size="8">Deploy</text>
                    <text x="510" y="118" text-anchor="middle" fill="white" font-size="8">Adapt</text>
                </svg>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 10px;">Sim-to-Real: Training in simulation, deploying to real robots</p>
            </div>

            <p>Transfer learning bridges the gap between simulation and reality, enabling robots to apply knowledge across different tasks and scenarios.</p>

            <h3 style="margin: 30px 0 20px;">Key Techniques</h3>
            <div class="card-grid">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-random" style="color: var(--primary);"></i> Domain Randomization</h4>
                    <p>Training in randomized simulated environments creates robust policies that transfer better to reality.</p>
                </div>
                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-brain" style="color: #8b5cf6;"></i> Meta-Learning (MAML)</h4>
                    <p>"Learning to learn" - quickly adapt to new tasks with minimal data.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <h4><i class="fas fa-graduation-cap" style="color: var(--secondary);"></i> Curriculum Learning</h4>
                    <p>Gradually increasing task complexity builds transferable skill foundations.</p>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Sim-to-Real Process</h3>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-content"><h4>Train in Simulation</h4><p>Train policy with domain randomization</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-content"><h4>Domain Adaptation</h4><p>Apply techniques to bridge reality gap</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-content"><h4>Progressive Networks</h4><p>Prevent forgetting while learning new skills</p></div>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <div class="step-content"><h4>Fine-tune</h4><p>Minimal real-world data for optimal performance</p></div>
                </div>
            </div>
        </div>
    `,

    '5-4': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-exchange-alt"></i> Activity: Sim-to-Real Design</h2>
            <div class="divider"></div>

            <div class="activity-box">
                <h3><i class="fas fa-cube"></i> Domain Randomization Challenge</h3>
                <p>Design a domain randomization strategy for a robotic grasping task that addresses at least 5 environmental variables.</p>
            </div>

            <h3 style="margin: 30px 0 20px;">The Three Steps</h3>
            <div class="card-grid">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4>Step 1: Setup Simulation</h4>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary); font-size: 0.9rem;">
                        <li>Create basic grasping simulation</li>
                        <li>Define state space (joint angles, object position)</li>
                        <li>Define action space (gripper movements)</li>
                    </ul>
                </div>
                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4>Step 2: Apply Randomization</h4>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary); font-size: 0.9rem;">
                        <li>Lighting conditions</li>
                        <li>Textures and colors</li>
                        <li>Friction coefficients</li>
                        <li>Object mass and dimensions</li>
                        <li>Camera positions</li>
                        <li>Sensor noise</li>
                    </ul>
                </div>
                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <h4>Step 3: Deploy & Evaluate</h4>
                    <ul style="margin: 10px 0 0 20px; color: var(--text-secondary); font-size: 0.9rem;">
                        <li>Transfer policy to real robot</li>
                        <li>Measure success rate</li>
                        <li>Fine-tune if needed</li>
                    </ul>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <h4><i class="fas fa-lightbulb"></i> Your Challenge</h4>
                <p>Which randomizations would have the most impact on successful real-world transfer? Focus on aspects most likely to differ between simulation and reality: lighting, friction, and sensor noise are often the biggest culprits!</p>
            </div>
        </div>
    `,

    '5-5': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 5</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-5">
                <div class="quiz-question">
                    <h4>1. What is the main advantage of Deep RL over traditional RL?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q5-1" value="a">
                            <span class="option-marker">A</span>
                            <span>It can learn directly from raw sensory inputs without manual feature engineering</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q5-1" value="b">
                            <span class="option-marker">B</span>
                            <span>It requires less computational power</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q5-1" value="c">
                            <span class="option-marker">C</span>
                            <span>It only works with discrete action spaces</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. What is domain randomization used for?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q5-2" value="a">
                            <span class="option-marker">A</span>
                            <span>Making simulations run faster</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q5-2" value="b">
                            <span class="option-marker">B</span>
                            <span>Creating robust policies that transfer better from simulation to reality</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q5-2" value="c">
                            <span class="option-marker">C</span>
                            <span>Reducing the number of training episodes needed</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-5')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-5"></div>
            </div>
        </div>
    `,

    // Module 6: Future & Industry
    '6-1': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-rocket"></i> Future Trends</h2>
            <div class="divider"></div>

            <div class="objectives-box">
                <h3><i class="fas fa-bullseye"></i> Learning Objectives</h3>
                <ul>
                    <li>Identify emerging research directions in robotic RL</li>
                    <li>Understand the transformative potential of these advances</li>
                    <li>Recognize opportunities in the field</li>
                </ul>
            </div>

            <img src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1200&q=80" alt="Futuristic robot" class="banner-image">

            <p>The field of AI-driven robotics is rapidly evolving. Breakthroughs in deep learning, simulation technology, and hardware are accelerating progress at an unprecedented rate. Here are the key trends shaping the future of robotic reinforcement learning.</p>

            <div class="card-grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-tachometer-alt" style="color: var(--primary);"></i> Improved Sample Efficiency</h4>
                    <p>Algorithms that learn from fewer samples, critical for costly real-world interactions.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4><i class="fas fa-eye" style="color: var(--success);"></i> Enhanced Sensory Integration</h4>
                    <p>Better deep learning integration for processing high-dimensional sensory inputs.</p>
                </div>
                <div class="card" style="border-left: 4px solid #8b5cf6;">
                    <h4><i class="fas fa-vr-cardboard" style="color: #8b5cf6;"></i> Advanced Sim-to-Real</h4>
                    <p>Bridging the reality gap through domain randomization and adaptive techniques.</p>
                </div>
                <div class="card" style="border-left: 4px solid #f59e0b;">
                    <h4><i class="fas fa-users-cog" style="color: #f59e0b;"></i> Multi-Agent Coordination</h4>
                    <p>Expanding MARL for complex collaborative tasks and efficient task allocation.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <h4><i class="fas fa-hand-paper" style="color: var(--secondary);"></i> Dexterous Manipulation</h4>
                    <p>Approaching human-level dexterity for complex fine motor tasks.</p>
                </div>
                <div class="card" style="border-left: 4px solid #ef4444;">
                    <h4><i class="fas fa-code-branch" style="color: #ef4444;"></i> Hybrid Approaches</h4>
                    <p>Combining model-based and model-free RL with other AI techniques.</p>
                </div>
            </div>
        </div>
    `,

    '6-2': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-industry"></i> Industry Applications</h2>
            <div class="divider"></div>

            <div class="image-grid three-col" style="margin-bottom: 25px;">
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" alt="Manufacturing robots">
                    <div class="caption">Manufacturing & Assembly</div>
                </div>
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" alt="Warehouse automation">
                    <div class="caption">Warehouse & Logistics</div>
                </div>
                <div class="image-card">
                    <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80" alt="Autonomous vehicle">
                    <div class="caption">Autonomous Navigation</div>
                </div>
            </div>

            <p>RL-powered robotics is transforming multiple industries. Here's where the technology is making the biggest impact.</p>

            <div class="card-grid" style="grid-template-columns: 1fr;">
                <div class="card" style="border-left: 4px solid var(--primary);">
                    <h4><i class="fas fa-robot" style="color: var(--primary);"></i> Manufacturing & Assembly</h4>
                    <p>RL enables robots to learn complex manipulation without human demonstrations. Assembly tasks demonstrate adaptive manipulation skills with improved sample efficiency.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <h4><i class="fas fa-warehouse" style="color: var(--secondary);"></i> Warehouse & Logistics</h4>
                    <p>RL optimizes navigation and task planning. Fetch Robotics uses RL for path optimization in changing warehouse layouts with adaptive obstacle avoidance.</p>
                </div>
                <div class="card" style="border-left: 4px solid var(--success);">
                    <h4><i class="fas fa-car" style="color: var(--success);"></i> Autonomous Navigation</h4>
                    <p>RL powers trajectory optimization and motion planning. Self-driving vehicles learn optimal policies for lane changing and traffic navigation.</p>
                </div>
            </div>

            <h3 style="margin: 30px 0 20px;">Future Opportunities</h3>
            <div class="card-grid">
                <div class="card">
                    <i class="fas fa-comments" style="color: var(--primary); font-size: 1.5rem;"></i>
                    <p style="margin-top: 10px;">Integration with NLP for enhanced human-robot interaction</p>
                </div>
                <div class="card">
                    <i class="fas fa-code-branch" style="color: #8b5cf6; font-size: 1.5rem;"></i>
                    <p style="margin-top: 10px;">Hybrid model-based and model-free approaches</p>
                </div>
                <div class="card">
                    <i class="fas fa-brain" style="color: var(--secondary); font-size: 1.5rem;"></i>
                    <p style="margin-top: 10px;">Long-horizon planning for complex sequential tasks</p>
                </div>
            </div>
        </div>
    `,

    '6-3': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-check-circle"></i> Knowledge Check: Module 6</h2>
            <div class="divider"></div>

            <div class="quiz-container" id="quiz-6">
                <div class="quiz-question">
                    <h4>1. Which industry uses RL for optimizing warehouse navigation?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q6-1" value="a">
                            <span class="option-marker">A</span>
                            <span>Healthcare</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q6-1" value="b">
                            <span class="option-marker">B</span>
                            <span>Logistics (e.g., Fetch Robotics)</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q6-1" value="c">
                            <span class="option-marker">C</span>
                            <span>Entertainment</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. What is a key future trend in robotic RL?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q6-2" value="a">
                            <span class="option-marker">A</span>
                            <span>Reducing robot capabilities</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="q6-2" value="b">
                            <span class="option-marker">B</span>
                            <span>Improved sample efficiency for fewer real-world trials</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="q6-2" value="c">
                            <span class="option-marker">C</span>
                            <span>Eliminating neural networks from RL</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkQuiz('quiz-6')">Check Answers</button>
                <div class="quiz-feedback" id="feedback-quiz-6"></div>
            </div>
        </div>
    `,

    // Final Assessment
    '7': `
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-award"></i> Final Assessment</h2>
            <div class="divider"></div>

            <p>Congratulations on completing the course modules! This final assessment will test your understanding of key concepts.</p>

            <div class="quiz-container" id="final-quiz">
                <div class="quiz-question">
                    <h4>1. What are the four core components of reinforcement learning?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="final-1" value="a">
                            <span class="option-marker">A</span>
                            <span>States, Actions, Rewards, Policies</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-1" value="b">
                            <span class="option-marker">B</span>
                            <span>Input, Output, Training, Testing</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-1" value="c">
                            <span class="option-marker">C</span>
                            <span>Sensors, Motors, Controllers, Networks</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>2. Which method combines value-based and policy-based approaches?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-2" value="a">
                            <span class="option-marker">A</span>
                            <span>Q-learning</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="final-2" value="b">
                            <span class="option-marker">B</span>
                            <span>Actor-Critic</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-2" value="c">
                            <span class="option-marker">C</span>
                            <span>REINFORCE</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>3. What technique helps bridge the simulation-to-reality gap?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="final-3" value="a">
                            <span class="option-marker">A</span>
                            <span>Domain randomization</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-3" value="b">
                            <span class="option-marker">B</span>
                            <span>Data augmentation</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-3" value="c">
                            <span class="option-marker">C</span>
                            <span>Batch normalization</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>4. What does MARL stand for?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-4" value="a">
                            <span class="option-marker">A</span>
                            <span>Machine Automated Reinforcement Learning</span>
                        </label>
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="final-4" value="b">
                            <span class="option-marker">B</span>
                            <span>Multi-Agent Reinforcement Learning</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-4" value="c">
                            <span class="option-marker">C</span>
                            <span>Model-Agnostic Robot Learning</span>
                        </label>
                    </div>
                </div>

                <div class="quiz-question">
                    <h4>5. Which company uses RL for quadruped locomotion?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option" data-correct="true">
                            <input type="radio" name="final-5" value="a">
                            <span class="option-marker">A</span>
                            <span>Boston Dynamics (Spot)</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-5" value="b">
                            <span class="option-marker">B</span>
                            <span>Tesla</span>
                        </label>
                        <label class="quiz-option" data-correct="false">
                            <input type="radio" name="final-5" value="c">
                            <span class="option-marker">C</span>
                            <span>Google Search</span>
                        </label>
                    </div>
                </div>

                <button class="submit-quiz" onclick="checkFinalQuiz()">Submit Assessment</button>
                <div class="quiz-feedback" id="feedback-final-quiz"></div>
            </div>
        </div>
    `
};

// Lesson sequence for navigation
const lessonSequence = [
    '0', '1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3',
    '4-1', '4-2', '4-3', '4-4', '5-1', '5-2', '5-3', '5-4', '5-5', '6-1', '6-2', '6-3', '7'
];

// State
let currentLessonIndex = 0;
let completedLessons = new Set();

// DOM Elements
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const resourcesBtn = document.getElementById('resources-btn');
const resourcesPanel = document.getElementById('resources-panel');
const closeResources = document.getElementById('close-resources');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const fontIncrease = document.getElementById('font-increase');
const fontDecrease = document.getElementById('font-decrease');

// Font size levels
const fontSizes = ['small', 'medium', 'large', 'x-large'];
let currentFontSizeIndex = 1; // Default to 'medium'

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLesson(lessonSequence[0]);
    setupEventListeners();
    updateProgress();
    initTheme();
    initFontSize();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('courseTheme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('courseTheme', theme);

    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggle.title = 'Switch to Dark Mode';
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggle.title = 'Switch to Light Mode';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Font Size Management
function initFontSize() {
    const savedSize = localStorage.getItem('courseFontSize') || 'medium';
    const index = fontSizes.indexOf(savedSize);
    currentFontSizeIndex = index >= 0 ? index : 1;
    setFontSize(fontSizes[currentFontSizeIndex]);
}

function setFontSize(size) {
    document.documentElement.setAttribute('data-font-size', size);
    localStorage.setItem('courseFontSize', size);
    updateFontButtons();
}

function updateFontButtons() {
    fontDecrease.disabled = currentFontSizeIndex === 0;
    fontIncrease.disabled = currentFontSizeIndex === fontSizes.length - 1;
}

function increaseFontSize() {
    if (currentFontSizeIndex < fontSizes.length - 1) {
        currentFontSizeIndex++;
        setFontSize(fontSizes[currentFontSizeIndex]);
    }
}

function decreaseFontSize() {
    if (currentFontSizeIndex > 0) {
        currentFontSizeIndex--;
        setFontSize(fontSizes[currentFontSizeIndex]);
    }
}

function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Font size controls
    fontIncrease.addEventListener('click', increaseFontSize);
    fontDecrease.addEventListener('click', decreaseFontSize);

    // Menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => navigatePrev());
    nextBtn.addEventListener('click', () => navigateNext());

    // Module expansion
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', (e) => {
            const module = header.parentElement;
            const hasLessons = module.querySelector('.module-lessons');

            if (hasLessons) {
                module.classList.toggle('expanded');
            } else {
                // Direct module link (welcome, final)
                const moduleId = module.dataset.module;
                navigateToLesson(moduleId);
            }
        });
    });

    // Lesson clicks
    document.querySelectorAll('.lesson').forEach(lesson => {
        lesson.addEventListener('click', () => {
            navigateToLesson(lesson.dataset.lesson);
        });
    });

    // Resources panel
    resourcesBtn.addEventListener('click', () => {
        resourcesPanel.classList.toggle('show');
        resourcesPanel.classList.toggle('hidden');
    });

    closeResources.addEventListener('click', () => {
        resourcesPanel.classList.remove('show');
        resourcesPanel.classList.add('hidden');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') navigateNext();
        if (e.key === 'ArrowLeft') navigatePrev();
    });
}

function loadLesson(lessonId) {
    const contentHtml = courseContent[lessonId];
    if (contentHtml) {
        content.innerHTML = contentHtml;
        content.scrollTop = 0;

        // Update active states
        document.querySelectorAll('.lesson').forEach(l => l.classList.remove('active'));
        const activeLesson = document.querySelector(`[data-lesson="${lessonId}"]`);
        if (activeLesson) {
            activeLesson.classList.add('active');
            // Expand parent module
            activeLesson.closest('.module')?.classList.add('expanded');
        }

        // Setup interactive elements
        setupTabs();
        setupAccordions();

        // Update navigation
        currentLessonIndex = lessonSequence.indexOf(lessonId);
        updateNavigation();
    }
}

function navigateToLesson(lessonId) {
    markCurrentComplete();
    loadLesson(lessonId);
}

function navigateNext() {
    if (currentLessonIndex < lessonSequence.length - 1) {
        markCurrentComplete();
        currentLessonIndex++;
        loadLesson(lessonSequence[currentLessonIndex]);
    }
}

function navigatePrev() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(lessonSequence[currentLessonIndex]);
    }
}

function markCurrentComplete() {
    const currentLesson = lessonSequence[currentLessonIndex];
    completedLessons.add(currentLesson);

    const lessonEl = document.querySelector(`[data-lesson="${currentLesson}"]`);
    if (lessonEl) lessonEl.classList.add('completed');

    updateProgress();
}

function updateNavigation() {
    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessonSequence.length - 1;
    pageIndicator.textContent = `${currentLessonIndex + 1} of ${lessonSequence.length}`;
}

function updateProgress() {
    const percent = Math.round((completedLessons.size / lessonSequence.length) * 100);
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = percent;
}

// Tab functionality
function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            const container = btn.closest('.tabs-container');

            container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
}

// Accordion functionality
function setupAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
}

// Quiz functionality
function checkQuiz(quizId) {
    const container = document.getElementById(quizId);
    const questions = container.querySelectorAll('.quiz-question');
    let correct = 0;
    let total = questions.length;

    questions.forEach(q => {
        const selected = q.querySelector('.quiz-option.selected');
        const options = q.querySelectorAll('.quiz-option');

        options.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
            if (opt.dataset.correct === 'true') {
                opt.classList.add('correct');
            }
        });

        if (selected) {
            if (selected.dataset.correct === 'true') {
                correct++;
            } else {
                selected.classList.add('incorrect');
            }
        }
    });

    const feedback = document.getElementById(`feedback-${quizId}`);
    feedback.classList.add('show');

    if (correct === total) {
        feedback.className = 'quiz-feedback show correct';
        feedback.innerHTML = `<i class="fas fa-check-circle"></i> Excellent! You got all ${total} questions correct!`;
    } else {
        feedback.className = 'quiz-feedback show incorrect';
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> You got ${correct} out of ${total} correct. Review the highlighted answers.`;
    }
}

function checkFinalQuiz() {
    const container = document.getElementById('final-quiz');
    const questions = container.querySelectorAll('.quiz-question');
    let correct = 0;
    let total = questions.length;

    questions.forEach(q => {
        const selected = q.querySelector('.quiz-option.selected');
        const options = q.querySelectorAll('.quiz-option');

        options.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
            if (opt.dataset.correct === 'true') {
                opt.classList.add('correct');
            }
        });

        if (selected && selected.dataset.correct === 'true') {
            correct++;
        } else if (selected) {
            selected.classList.add('incorrect');
        }
    });

    const feedback = document.getElementById('feedback-final-quiz');
    feedback.classList.add('show');
    const percentage = Math.round((correct / total) * 100);

    if (percentage >= 80) {
        feedback.className = 'quiz-feedback show correct';
        feedback.innerHTML = `
            <h3><i class="fas fa-trophy"></i> Congratulations!</h3>
            <p>You scored ${correct}/${total} (${percentage}%) - You've passed the course!</p>
            <p style="margin-top: 10px;">You now have a solid understanding of reinforcement learning in robotics.</p>
        `;
        completedLessons.add('7');
        updateProgress();
    } else {
        feedback.className = 'quiz-feedback show incorrect';
        feedback.innerHTML = `
            <p><i class="fas fa-redo"></i> You scored ${correct}/${total} (${percentage}%)</p>
            <p>You need 80% to pass. Review the modules and try again!</p>
        `;
    }
}

// Quiz option selection
document.addEventListener('click', (e) => {
    const option = e.target.closest('.quiz-option');
    if (option) {
        const question = option.closest('.quiz-question');
        question.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
    }
});
