import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, Shield, Users, AlertTriangle, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const screens = [
  {
    id: 'title',
    type: 'title',
    title: 'Mālama i ka Hale',
    subtitle: 'A Guide to Workplace Safety',
    description: 'Module 1: Our Foundation for Safety',
    image: '/api/placeholder/800/400'
  },
  {
    id: 'objectives',
    type: 'objectives',
    title: 'What You Will Learn in This Module',
    description: 'Welcome to the first step in our commitment to workplace safety. This foundational module explains the "why" behind our safety protocols. By the end of this section, you will be able to:',
    objectives: [
      'Explain the company\'s philosophy on safety as a shared kuleana (responsibility)',
      'Define the roles of both the employer and the employee under Hawaiʻi law',
      'Identify the "General Duty Clause" as the core of HIOSH compliance',
      'Recognize how these principles apply to your daily work'
    ]
  },
  {
    id: 'leadership',
    type: 'leadership',
    title: 'Our Commitment Starts at the Top',
    content: `Aloha Team,

At the heart of our work is mālama—the care we show for our clients, our tenants, and the properties we manage. But our most important kuleana is to each other.

This training is about ensuring that every member of our ʻohana goes home safe at the end of the day. It's not just about compliance; it's about building a culture of awareness and mutual protection. Your work is essential, and doing it safely is paramount.

As you go through this material, I want you to think of it not as a requirement, but as a tool. It is a guide to help us all uphold our most important responsibility: looking out for one another.

Thank you for your commitment.`,
    signature: 'Leadership Team'
  },
  {
    id: 'hiosh-intro',
    type: 'content',
    title: 'The Legal Framework for Our Safety',
    content: `To ensure a safe workplace for everyone, our company operations are guided by the standards set by the Hawaiʻi Occupational Safety and Health division, or HIOSH. Established under the Hawaiʻi Revised Statutes, Chapter 396, this state-run program creates the legal framework for workplace safety.

While these regulations set the minimum standard, our goal is to exceed them. Understanding the basics of HIOSH is essential, as it defines the specific, legally-mandated duties for both our company and for you as an employee. Let's look at those duties now.`,
    icon: FileText
  },
  {
    id: 'shared-duties',
    type: 'duties',
    title: 'A Partnership in Safety',
    description: 'HIOSH law is built on a partnership. It outlines distinct but complementary responsibilities. Think of it as a shared kuleana—the company provides the safe environment and tools, and employees use them correctly and responsibly.',
    employerDuties: [
      'Provide a workplace free from recognized hazards (General Duty Clause, §396-6(a))',
      'Comply with all HIOSH rules and standards',
      'Provide and pay for necessary Personal Protective Equipment (PPE)',
      'Provide effective safety training'
    ],
    employeeDuties: [
      'Comply with all HIOSH rules applicable to your own actions (§396-6(b))',
      'Follow all lawful employer safety and health rules',
      'Report hazardous conditions to your supervisor',
      'Report job-related injuries or illnesses promptly'
    ]
  },
  {
    id: 'general-duty',
    type: 'content',
    title: 'The Most Important Rule',
    content: `While HIOSH has many specific rules for things like ladders or electrical safety, the single most important concept is the General Duty Clause (§396-6(a)).

This clause states that every employer must provide a workplace "free from recognized hazards that are causing or are likely to cause death or serious physical harm."

What this means in practice: We are legally required to address any serious hazard we know about, even if there isn't a specific regulation for it. This is why your role in identifying and reporting issues is so critical. You are our eyes and ears on the properties. Your awareness turns this legal requirement into a life-saving practice.`,
    icon: AlertTriangle
  },
  {
    id: 'summary',
    type: 'summary',
    title: 'Module 1 Summary',
    description: 'We\'ve now established the foundation for our safety culture. Let\'s review the key takeaways from this module:',
    takeaways: [
      'Safety is a Core Value: Our approach to safety is rooted in mālama and our kuleana to protect our company ʻohana',
      'HIOSH Sets the Standard: Our safety program is built to meet and exceed the legal requirements of Hawaiʻi Revised Statutes, Chapter 396',
      'It\'s a Partnership: Both the company and employees have specific, legally-defined duties to maintain a safe workplace',
      'The General Duty Clause is Key: We must always address known hazards, making your awareness and reporting essential'
    ],
    nextModule: 'In the next module, we will build on this foundation and learn how to actively identify common hazards you may encounter in your daily work.'
  },
  {
    id: 'quiz',
    type: 'quiz',
    title: 'Knowledge Check',
    question: 'According to HIOSH\'s General Duty Clause, if a property manager spots a potential hazard that isn\'t covered by a specific safety rule, what is the correct approach?',
    options: [
      'Ignore it, since there is no specific rule',
      'Wait for a tenant to report it before taking action',
      'Recognize it as a potential hazard and report it according to company procedure, because the employer is responsible for known hazards',
      'Fix it only if it\'s cheap and easy to do so'
    ],
    correctAnswer: 2,
    feedback: {
      correct: 'That\'s right. Safety is our shared kuleana, and that includes addressing all recognized hazards.',
      incorrect: 'Not quite. Under the General Duty Clause, employers have a responsibility to address all recognized hazards, even if there isn\'t a specific rule. Reporting is the first critical step.'
    }
  }
]

function App() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [completedScreens, setCompletedScreens] = useState(new Set())

  const progress = ((currentScreen + 1) / screens.length) * 100

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCompletedScreens(prev => new Set([...prev, currentScreen]))
      setCurrentScreen(currentScreen + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
  }

  const screen = screens[currentScreen]

  const renderScreen = () => {
    switch (screen.type) {
      case 'title':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-blue-900 mb-4">{screen.title}</h1>
              <h2 className="text-2xl text-blue-700 mb-6">{screen.subtitle}</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800">{screen.description}</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center border border-blue-200">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-700 font-medium">Professional Property Management</p>
                  <p className="text-blue-600">Honolulu, Hawaiʻi</p>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'objectives':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{screen.description}</p>
            <div className="grid gap-4">
              {screen.objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'leadership':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            <Card className="border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                      {screen.content}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold text-blue-800">{screen.signature}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )

      case 'content':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              {screen.icon && <screen.icon className="w-8 h-8 text-blue-600" />}
              <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed bg-white p-6 rounded-lg border border-gray-200">
                {screen.content}
              </div>
            </div>
          </motion.div>
        )

      case 'duties':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{screen.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800 flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Employer Duties (Our Promise to You)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {screen.employerDuties.map((duty, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Employee Duties (Your Responsibility)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {screen.employeeDuties.map((duty, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )

      case 'summary':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{screen.description}</p>
            <div className="space-y-4">
              {screen.takeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{takeaway}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium">{screen.nextModule}</p>
            </div>
          </motion.div>
        )

      case 'quiz':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">{screen.title}</h2>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Let's confirm our understanding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 font-medium">{screen.question}</p>
                <div className="space-y-3">
                  {screen.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedAnswer === index
                          ? index === screen.correctAnswer
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : 'bg-red-100 border-red-500 text-red-800'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-lg ${
                        selectedAnswer === screen.correctAnswer
                          ? 'bg-green-100 border border-green-200 text-green-800'
                          : 'bg-red-100 border border-red-200 text-red-800'
                      }`}
                    >
                      {selectedAnswer === screen.correctAnswer
                        ? screen.feedback.correct
                        : screen.feedback.incorrect}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Mālama i ka Hale</h1>
                <p className="text-sm text-blue-600">Workplace Safety Training</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {currentScreen + 1} of {screens.length}
              </span>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[600px]"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Button
              onClick={prevScreen}
              disabled={currentScreen === 0}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            
            <div className="flex space-x-2">
              {screens.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentScreen
                      ? 'bg-blue-600'
                      : completedScreens.has(index)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextScreen}
              disabled={currentScreen === screens.length - 1 || (screen.type === 'quiz' && !showFeedback)}
              className="flex items-center space-x-2"
            >
              <span>{currentScreen === screens.length - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

