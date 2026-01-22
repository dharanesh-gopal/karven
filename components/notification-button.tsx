'use client'

import { useState, useEffect } from 'react'
import { Bell, X } from 'lucide-react'
import { useSanityData } from '@/hooks/useSanityData'

interface Notification {
  _id: string
  title: string
  message: string
  type: 'update' | 'addon' | 'feature'
  publishedAt: string
  isNew: boolean
}

export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [readNotifications, setReadNotifications] = useState<Set<string>>(new Set())
  
  // Fetch notifications from Sanity
  const { data: sanityNotifications } = useSanityData<Notification[]>(
    `*[_type == "notification" && isActive == true] | order(publishedAt desc) {
      _id,
      title,
      message,
      type,
      publishedAt,
      isNew
    }`,
    {},
    []
  )

  // Load read notifications from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('readNotifications')
    if (stored) {
      setReadNotifications(new Set(JSON.parse(stored)))
    }
  }, [])

  // Process notifications with read status
  const notifications = (sanityNotifications || []).map(n => ({
    ...n,
    isNew: n.isNew && !readNotifications.has(n._id)
  }))

  const unreadCount = notifications.filter(n => n.isNew).length

  const markAsRead = (id: string) => {
    const updated = new Set(readNotifications)
    updated.add(id)
    setReadNotifications(updated)
    localStorage.setItem('readNotifications', JSON.stringify(Array.from(updated)))
  }

  const markAllAsRead = () => {
    const allIds = notifications.map(n => n._id)
    const updated = new Set([...readNotifications, ...allIds])
    setReadNotifications(updated)
    localStorage.setItem('readNotifications', JSON.stringify(Array.from(updated)))
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'bg-blue-500'
      case 'update':
        return 'bg-green-500'
      case 'addon':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'feature':
        return 'New Feature'
      case 'update':
        return 'Update'
      case 'addon':
        return 'Add-on'
      default:
        return 'Notification'
    }
  }

  const formatTimestamp = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    if (days === 1) return 'Yesterday'
    return `${days}d ago`
  }

  return (
    <>
      {/* Notification Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-8 z-50 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Notifications"
      >
        <Bell className="w-6 h-6 group-hover:animate-pulse" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-end pt-20 pr-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-slide-in-right">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-white/90 hover:text-white underline"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {notifications.map((notification) => (
                    <div
                      key={notification._id}
                      className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                        notification.isNew ? 'bg-blue-50/50' : ''
                      }`}
                      onClick={() => markAsRead(notification._id)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Type Indicator */}
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTypeColor(notification.type)}`} />
                        
                        <div className="flex-1 min-w-0">
                          {/* Type Badge */}
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${getTypeColor(notification.type)} text-white`}>
                            {getTypeLabel(notification.type)}
                          </span>
                          
                          {/* Title */}
                          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            {notification.title}
                            {notification.isNew && (
                              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            )}
                          </h4>
                          
                          {/* Message */}
                          <p className="text-sm text-gray-600 mb-2">
                            {notification.message}
                          </p>
                          
                          {/* Timestamp */}
                          <p className="text-xs text-gray-400">
                            {formatTimestamp(notification.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  )
}