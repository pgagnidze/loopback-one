'use client'

import { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"

export function CalMeetingButton () {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "loopback-1-hour-meeting" })
      cal("ui", {
        "theme":"dark",
        "cssVarsPerTheme": {
          "light": {
            "cal-brand": "#292929"
          },
          "dark": {
            "cal-brand": "#292929"
          }
        },
        "hideEventTypeDetails": true,
        "layout": "month_view"
      })
    })()
  }, [])

  return (
    <button
      data-cal-namespace="loopback-1-hour-meeting"
      data-cal-link="papuna-gagnidze/loopback-1-hour-meeting"
      data-cal-config='{"layout":"month_view"}'
      className="group rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
    >
      Book a Meeting
    </button>
  )
}
