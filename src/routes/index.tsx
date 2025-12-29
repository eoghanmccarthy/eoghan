import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-12 font-serif text-gray-700">
      <div className="max-w-2xl">
        <p className="mb-12 leading-relaxed">
          eoghan mccarthy builds tools for machine learning engineers. he works
          primarily in javascript, typescript, and python creating interfaces
          and systems that prioritize clarity and usability, informed by a
          background in design.
        </p>

        <div className="mt-16 space-y-6">
          <div>
            <div className="text-xs tracking-widest uppercase mb-2 font-sans">
              contact
            </div>
            <div>
              <a href="mailto:me@eoghan.io" className="hover:underline">
                me@eoghan.io
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-widest uppercase mb-2 font-sans">
              links
            </div>
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
      </div>
    </div>
  );
}
