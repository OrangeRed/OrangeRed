import { h } from "preact"

import { ABOUT_ME, AVATAR } from "@src/Data"
const { description, name, currentJob } = ABOUT_ME

const Hero = () => {
  return (
    <section class="flex flex-col md:flex-row justify-between items-center px-3 mb-8 md:mt-8">
      <img
        class="h-72 w-72 m-8 rounded-full object-cover shadow-black shadow-2xl"
        src={AVATAR}
        alt="Dmitriy Kagno Avatar"
      />

      <div class="flex flex-col items-start w-full md:w-auto">
        <div class="flex flex-col justify-start md:justify-center">
          <span class="flex items-end text-2xl pb-2">
            <img src="/hand_wave.gif" class="h-10 mr-3" />
            <span>Hi There, I'm</span>
          </span>

          <h1 class="flex text-5xl sm:text-7xl w-full">
            <span class="bg-clip-text pb-3 text-fill-transparent animate-linear bg-gradient-to-r from-red-700 via-orange-400 to-yellow-300">
              {name}
            </span>
          </h1>
        </div>

        <p class="text-lg sm:text-xl my-2 w-full border-b border-zinc-600">
          Here are some fun facts about me:
        </p>
        <ol class="sm:list-['~'] list-inside">
          {description.map((line, idx) => {
            return (
              <li
                class="mb-3 font-normal tracking-wide overflow-hidden typewriter whitespace-nowrap mr-auto marker:mr-3 "
                style={{
                  animationDelay: `${1.5 * idx}s`,
                  animationTimingFunction: `steps(${line.length}, end)`,
                }}
              >
                {!line.includes("@") ? (
                  <span class="m-0 sm:ml-1">{line}</span>
                ) : (
                  <span class="m-0 sm:ml-1">
                    {line.slice(0, line.indexOf("@"))}
                    <a
                      class="text-sky-400 hover:text-sky-600"
                      href={currentJob.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{currentJob.name}
                    </a>
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Hero
