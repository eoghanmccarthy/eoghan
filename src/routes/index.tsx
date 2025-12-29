import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-12 font-serif text-gray-700">
      <div className="max-w-2xl">
        <p className="mb-12 leading-relaxed">
          eoghan mccarthy is a developer with a design background who builds machine learning tooling.
          working primarily with javascript, typescript, and python, he approaches technical problems
          with good instincts for ui/ux and an eye for the seemingly ordinary: the power in subtlety
          and simplicity.
        </p>

        <div className="mt-16 space-y-6">
          <div>
            <div className="text-xs tracking-widest uppercase mb-2 font-sans">contact</div>
            <div>
              <a
                href="mailto:me@eoghan.io"
                className="hover:underline"
              >
                me@eoghan.io
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-widest uppercase mb-2 font-sans">work</div>
            <div>
              <a
                href="https://github.com/eoghanmccarthy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline block"
              >
                github
              </a>
            </div>
          </div>
        </div>

        {/*<footer className="fixed bottom-12 left-12 right-12 flex justify-between text-xs">*/}
        {/*  <div>eoghan mccarthy © all rights reserved</div>*/}
        {/*</footer>*/}
      </div>
    </div>
  )
}
