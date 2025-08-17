"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Coffee, Utensils, Camera, Calendar, CheckCircle, Star, Sparkles, Film, MapPin } from "lucide-react"

export default function RomanticConfession() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [hearts, setHearts] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])
  const [showSparkles, setShowSparkles] = useState(false)

  const handleAccept = () => {
    setIsAccepted(true)
    setShowSparkles(true)
    // Tạo hiệu ứng trái tim bay
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      delay: Math.random() * 2
    }))
    setHearts(newHearts)
    
    setTimeout(() => {
      setShowSparkles(false)
      setHearts([])
    }, 4000)
  }

  const phases = [
    {
      title: "Phase 1: Xem Phim Thanh Gươm Diệt Quỷ",
      description: "Cùng nhau thưởng thức bộ phim anime đầy cảm xúc",
      icon: Film,
      activities: ["Xem phim Thanh Gươm Diệt Quỷ", "Chia sẻ cảm xúc", "Thảo luận về nhân vật yêu thích"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Phase 2: Ăn & Lượn Lờ Sài Gòn", 
      description: "Khám phá ẩm thực đường phố Sài Gòn",
      icon: MapPin,
      activities: ["Ăn & Lượn lờ các quán ngon", "Khám phá ẩm thực đường phố", "Chụp ảnh kỷ niệm"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Phase 3: Forever Together",
      description: "You are the sweetest girl I ever met. I want to be with you and protect you forever!",
      icon: Calendar,
      activities: ["Promise to protect you", "Be there for you always", "Make you happy every day", "Love you forever"],
      color: "from-blue-500 to-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-900 dark:to-slate-800 p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-pink-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        
        {/* Email Letter */}
        <Card className="bg-white dark:bg-slate-800 shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-2 border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-block animate-pulse">
                <h1 className="text-5xl font-bold mb-2 text-slate-800 dark:text-slate-200 font-handwriting">
                  💌 Romantic Confession 💌
                </h1>
              </div>
              <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center font-handwriting text-xl">
                <Heart className="w-5 h-5 mr-2 text-pink-500 animate-bounce" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">From: Le Trieu Phu</span>
                <Heart className="w-5 h-5 ml-2 text-pink-500 animate-bounce" />
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none font-handwriting">
              <p className="text-2xl leading-relaxed text-slate-800 dark:text-slate-200">
                Dear <span className="font-bold text-pink-600 animate-pulse text-3xl">Bich Thuy</span>,
              </p>

              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                I hope this message doesn't land in your "spam" folder, because what I'm about to propose might be the <span className="font-bold text-pink-600">most important project</span> I've ever worked on.
              </p>

              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                After two weeks of friendly interaction and thorough observation, I've come to the conclusion that I'd like to initiate a <span className="font-bold text-pink-600">long-term "partnership"</span> with you. The project scope: getting to know each other better. The KPIs: laughter, memorable moments, and maybe even something <span className="font-bold text-pink-600">more meaningful</span> along the way.
              </p>

              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                I believe our "compatibility index" is already showing <span className="font-bold text-pink-600">promising signs</span>, but I'd love the opportunity to conduct more "in-person meetings" (a.k.a. spending time together). Don't worry, there will be no boring PowerPoints—just good vibes, honest conversations, and maybe coffee or dinner.
              </p>

              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                If you're open to this <span className="font-bold text-pink-600">collaboration</span>, I'm confident we can build something <span className="font-bold text-pink-600">wonderful</span> together. And if not, I'll still consider myself lucky to have met someone as <span className="font-bold text-pink-600">amazing</span> as you.
              </p>

              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                Looking forward to your kind "approval."
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="font-medium text-slate-800 dark:text-slate-200 font-handwriting text-xl">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Warm regards,</span><br />
                  <span className="text-pink-600 font-bold text-3xl animate-pulse">Le Trieu Phu</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Accept Button */}
        {!isAccepted && (
          <div className="text-center">
            <Button
              onClick={handleAccept}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
            >
              <Heart className="w-6 h-6 mr-3 animate-bounce" />
              Đồng ý 💚
            </Button>
          </div>
        )}

        {/* Success Message */}
        {isAccepted && (
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 p-6 text-center transform animate-bounce">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse" />
            <h2 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
              🎉 Yay! Partnership Accepted!
            </h2>
            <p className="text-green-700 dark:text-green-300">
              Let's start our beautiful journey together!
            </p>
          </Card>
        )}

        {/* Timeline */}
        {isAccepted && (
          <Card className="bg-white dark:bg-slate-800 shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-2 border-pink-200 dark:border-pink-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              <Sparkles className="w-8 h-8 inline mr-3 text-yellow-500 animate-spin" />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                💕 Our Journey Together 💕
              </span>
              <Sparkles className="w-8 h-8 inline ml-3 text-yellow-500 animate-spin" />
            </h2>
            
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
              
              <div className="space-y-8">
                {phases.map((phase, index) => {
                  const IconComponent = phase.icon
                  const isActive = index === currentPhase
                  const isCompleted = index < currentPhase
                  
                  return (
                    <div key={index} className="relative group">
                      {/* Phase Container */}
                      <div className={`relative flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 shadow-lg border-2 border-pink-300 dark:border-pink-700' 
                          : isCompleted
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 shadow-md border-2 border-green-300 dark:border-green-700'
                            : 'bg-slate-50 dark:bg-slate-700/50 hover:bg-pink-50 dark:hover:bg-pink-900/10 border-2 border-slate-200 dark:border-slate-600'
                      }`}>
                        
                        {/* Phase Number Badge */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-pink-400 flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Phase Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg ${
                          isCompleted 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                            : isActive 
                              ? `bg-gradient-to-r ${phase.color} text-white animate-pulse` 
                              : 'bg-slate-200 dark:bg-slate-600 text-slate-500'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-8 h-8" />
                          ) : (
                            <IconComponent className="w-8 h-8" />
                          )}
                        </div>
                        
                        {/* Phase Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className={`text-xl font-bold transition-all duration-300 ${
                              isActive 
                                ? 'text-pink-600 dark:text-pink-400' 
                                : isCompleted
                                  ? 'text-green-600 dark:text-green-400'
                                  : 'text-slate-900 dark:text-white'
                            }`}>
                              {phase.title}
                              {isActive && <Star className="w-5 h-5 inline ml-2 text-yellow-500 animate-spin" />}
                              {isCompleted && <CheckCircle className="w-5 h-5 inline ml-2 text-green-500" />}
                            </h3>
                            <p className={`text-lg mt-2 font-medium ${
                              isActive 
                                ? 'text-pink-700 dark:text-pink-300' 
                                : isCompleted
                                  ? 'text-green-700 dark:text-green-300'
                                  : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {phase.description}
                            </p>
                          </div>
                          
                          {/* Activities Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-center space-x-3 group/item p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                                <div className={`w-3 h-3 rounded-full transition-all duration-300 group-hover/item:scale-150 ${
                                  isActive ? 'bg-pink-400' : isCompleted ? 'bg-green-400' : 'bg-slate-400'
                                }`}></div>
                                <span className={`text-sm font-medium transition-colors duration-300 ${
                                  isActive 
                                    ? 'text-pink-700 dark:text-pink-300 group-hover/item:text-pink-800' 
                                    : isCompleted
                                      ? 'text-green-700 dark:text-green-300 group-hover/item:text-green-800'
                                      : 'text-slate-600 dark:text-slate-400 group-hover/item:text-slate-800'
                                }`}>
                                  {activity}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Phase Button */}
                          {isActive && (
                            <div className="pt-4">
                              <Button
                                onClick={() => setCurrentPhase(index + 1)}
                                className={`bg-gradient-to-r ${phase.color} hover:scale-105 text-white transition-all duration-300 shadow-lg px-6 py-3 text-base font-semibold`}
                                size="lg"
                              >
                                <Calendar className="w-5 h-5 mr-2" />
                                Start Phase {index + 1} ✨
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Flying Hearts Animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 animate-fly text-2xl"
          style={{
            left: heart.x,
            top: heart.y,
            animationDelay: `${heart.delay}s`,
            animationDuration: '4s'
          }}
        >
          ❤️
        </div>
      ))}

      {/* Sparkles Effect */}
      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle text-yellow-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${1 + Math.random() * 1}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        /* Custom Heart Cursor */
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ff6b9d"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') 12 12, auto;
        }
        
        /* Button cursor override */
        button, [role="button"] {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ff1493"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') 12 12, pointer;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes fly {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-fly {
          animation: fly linear forwards;
        }
        
        .animate-sparkle {
          animation: sparkle ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
