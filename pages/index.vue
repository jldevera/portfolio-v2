<template>
  <div class="lg:flex px-15">
    <!-- Left Sidebar Navigation -->
    <header class="md:flex md:flex-row lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24 items-center justify-center lg:items-start lg:justify-start">
      <div class="text-left lg:text-left">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/portfolio-v2" class="text-[#cbd1eb] text-3xl lg:text-4xl font-inter">Jerome Louie De Vera</a>
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          <span class="text-[#FFC857]">{{ typedText }}</span><span class="animate-pulse">|</span>
        </h2>
        <p class="mt-4 lg:max-w-xs leading-normal text-secondary">
          I architect reliable, scalable backend systems and APIs that power modern web applications.
        </p>
        
        <!-- Navigation -->
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-16 w-max">
            <li>
              <a class="group flex items-center py-3" href="#about">
                <span 
                  :class="activeSection === '#about'
                      ? 'nav-indicator mr-4 h-px transition-all w-16 bg-white motion-reduce:transition-none' 
                      : 'nav-indicator mr-4 h-px w-8 bg-white/60 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none'"
                ></span>
                <span 
                  :class="activeSection === '#about'
                    ? 'nav-text text-xs font-bold uppercase tracking-widest text-[#FFC857] group-hover:text-white group-focus-visible:text-white'
                    : 'nav-text text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white group-focus-visible:text-white'"
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" href="#experience">
                <span 
                  :class="activeSection === '#experience'
                      ? 'nav-indicator mr-4 h-px transition-all w-16 bg-white motion-reduce:transition-none' 
                      : 'nav-indicator mr-4 h-px w-8 bg-white/60 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none'"
                ></span>
                <span
                  :class="activeSection === '#experience'
                    ? 'nav-text text-xs font-bold uppercase tracking-widest text-[#FFC857] group-hover:text-white group-focus-visible:text-white'
                    : 'nav-text text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white group-focus-visible:text-white'"
                >
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" href="#projects">
                <span 
                  :class="activeSection === '#projects'
                      ? 'nav-indicator mr-4 h-px transition-all w-16 bg-white motion-reduce:transition-none' 
                      : 'nav-indicator mr-4 h-px w-8 bg-white/60 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none'"
                ></span>
                <span
                  :class="activeSection === '#projects'
                    ? 'nav-text text-xs font-bold uppercase tracking-widest text-[#FFC857] group-hover:text-white group-focus-visible:text-white'
                    : 'nav-text text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white group-focus-visible:text-white'"
                >
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="sm:mt-10 mt-5">
        <!-- Social Links -->
        <ul class="mt-8 flex items-center justify-center lg:justify-start" aria-label="Social media">
          <li class="mr-5 shrink-0 text-xs">
            <a class="block hover:text-[#FFC857] transition-colors" href="https://github.com/jldevera" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
              <span class="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li class="mr-5 shrink-0 text-xs">
            <a class="block hover:text-[#FFC857] transition-colors" href="https://www.linkedin.com/in/jerome-louie-de-vera-2591a1235" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
              <span class="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <!-- Facebook -->
          <li class="mr-5 shrink-0 text-xs">
            <a class="block hover:text-[#FFC857] transition-colors" href="https://www.facebook.com/JeromeLouieDevera" target="_blank" rel="noreferrer noopener" aria-label="Facebook (opens in a new tab)" title="Facebook">
              <span class="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          </li>
          <!-- <li class="mr-5 shrink-0 text-xs">
            <a class="block hover:text-[#FFC857] transition-colors" href="mailto:jldevera020692@gmail.com" aria-label="Email" title="Email">
              <span class="sr-only">Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </li> -->
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="lg:w-[50%]">
    <!-- About Section -->
      <section id="about" class="section-padding mt-8">
        <div class="container-custom">
          <div class="max-w-4xl">
            <div class="lg:hidden sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1e293b] bg-opacity-75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-white font-bold">About</h2>
            </div>

            <div class="items-center mt-8">
              <div class="space-y-6">
                <p class="text-md text-secondary leading-relaxed">
                  I'm a passionate web developer with more than 5 years of experience specializing in web development. While my early years involved working across the full stack, my current focus is backend engineering—crafting scalable APIs, managing complex data flows, and optimizing server-side logic. I work primarily with PHP and the Laravel framework, and I'm continuously exploring new technologies to sharpen my skills and stay adaptable in a fast-evolving industry.
                </p>
                <p class="text-md text-secondary leading-relaxed">
                  I'm currently working as a Mid Software Engineer (SEIII) at <a href="https://yns.ph/" target="_blank" class="text-[#ff6145] font-bold italic">YNS PH</a>, a company that provides web development services using different technologies. I contribute to the creation and maintenance of web applications, ensuring they are efficient, secure, and scalable.
                </p>

                <!-- copy paragraph for more details -->
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- Experience Section -->
      <!-- desktop view -->
      <section id="experience" class="section-padding">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <div class="lg:hidden sticky top-0 z-20 -mx-6 mb-5 w-screen bg-[#1e293b] bg-opacity-75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-white font-bold">Experience</h2>
            </div>

            <div class="group">
              <!-- display in desktop view -->
              <div 
                v-for="(job, index) in experience" 
                :key="index"
                class="group/item hidden sm:block z-10"
              >
                  <!-- Content -->
                  <a :href="job.url" target="_blank" rel="noopener noreferrer">
                    <div class="w-full">
                      <div class="hover:cursor-pointer hover:rounded-xl p-8 hover:shadow-sm hover:bg-[#58595c] hover:bg-opacity-10 exp">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div class="flex gap-1 text-lg font-semibold">
                            <span class="text-primary">{{ job.title }}</span>
                            <div class="relative">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="absolute text-primary bottom-0 left-0 h-4 w-4 transition-all duration-300 arrow" 
                                aria-hidden="true">
                                <path 
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" 
                                  clip-rule="evenodd">
                                </path>
                              </svg>
                            </div>
                          </div>
                          <span class="text-xs text-secondary text-text-muted sm:mt-0 italic">{{ job.period }}</span>
                        </div>
                        <p class="text-primary-600 font-medium mb-4">{{ job.company }}</p>
                        <p class="text-secondary mb-4 text-sm">{{ job.description }}</p>
                        
                        <!-- Technologies -->
                        <div class="flex flex-wrap gap-2 hidden">
                          <span 
                            v-for="tech in job.technologies" 
                            :key="tech"
                            class="px-3 py-1 bg-[#203064] text-sm rounded-full font-medium tech text-xs"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
              </div>
              <!-- display in mobile view -->
              <div class="sm:hidden">
                <div v-for="(job, index) in experience" :key="index"
                  class="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50
                  hover:cursor-pointer hover:rounded-xl p-8 hover:shadow-sm hover:bg-[#1e293b] hover:bg-opacity-50 mb-2 hover:text-[#FFC857]"
                >
                  <div>
                    <header class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">{{ job.period }}</header>
                    <h2 class="font-semibold text-primary mb-2">{{ job.title }}</h2>
                    <p class="text-secondary text-text-muted text-sm">{{ job.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download PDF file -->
      <div class="flex justify-start items-center lg:ml-2">
        <a href="JL_CV.pdf" download class="text-secondary hover:text-primary-500 font-medium flex items-center">
          View Full Resume
        </a>
      </div>

      <!-- Projects Section -->
      <section id="projects" class="section-padding">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <div class="lg:hidden sticky top-0 z-20 -mx-6 w-screen mb-5 bg-[#1e293b] bg-opacity-75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-white font-bold">Projects</h2>
            </div>
            
            <div class="group">
              <!-- display in desktop view -->
              <div 
                v-for="project in featuredProjects" 
                :key="project.id"
                class="group/item hidden sm:block z-10"
              >
                <div class="rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 mb-5 hover:bg-[#58595c] hover:bg-opacity-10 relative">
                  <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-primary">{{ project.title }}</h3>
                    <div>
                      <div class="text-secondary text-xs italic">{{ "{" + project.type + "}" }}</div>
                      <div class="text-secondary text-sm">{{ project.description }}</div>
                    </div >
                    
                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="px-3 py-1 bg-[#203064] text-sm rounded-full font-medium tech"
                      >
                        {{ tech }}
                      </span>
                    </div>
                    
                    <!-- Links -->
                    <div class="flex space-x-4 pt-4 text-sm">
                      <a 
                        v-if="project.liveUrl"
                        :href="project.liveUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-secondary hover:text-white font-medium flex items-center"
                      >
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Live Demo
                      </a>
                      <a 
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-text-secondary hover:text-text font-medium flex items-center"
                      >
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- display in mobile view -->
            <div class="sm:hidden">
              <div v-for="(project, index) in featuredProjects" :key="index"
                class="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50
                hover:cursor-pointer hover:rounded-xl p-8 hover:shadow-sm hover:bg-[#1e293b] hover:bg-opacity-50 mb-2 hover:text-[#FFC857]"
              >
                <div>  
                  <h2 class="font-semibold text-primary mb-5">{{ project.title }}</h2>
                  <div class="text-secondary text-xs italic">{{ "{" + project.type + "}" }}</div>
                  <p class="text-secondary text-text-muted text-sm mt-1">{{ project.description }}</p>
                  <!-- technologies -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-[#203064] text-[#cbd1eb] text-xs rounded-full font-medium tech"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Links -->
                  <div class="flex space-x-4 mt-4">
                    <a 
                      v-if="project.liveUrl"
                      :href="project.liveUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-secondary hover:text-primary-700 font-medium flex items-center" 
                    >
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section-padding">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto text-center">
            <div class="text-lg font-bold text-secondary sm:text-white mb-5 text-center">Get In Touch</div>
            <p class="text-md text-text-secondary mb-5 text-center">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div class="text-center">
            <a href="mailto:jldevera020692@gmail.com" class="text-[#FFC857] hover:text-primary-700 transition-colors text-sm">
              jldevera020692@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Scroll to Top Button -->
    <button 
      v-show="showScrollTop" 
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-[#FFC857] bg-opacity-50 hover:bg-[#FFB833] text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>

    <!-- Cursor Glow Component -->
    <CursorGlow 
      ref="cursorGlowRef"
      :size="1000"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CursorGlow from '~/components/CursorGlow.vue'

const isScrolled = ref(false)
const activeSection = ref('#about')
/**
 * Single-page portfolio component inspired by Brittany Chiang's design
 * Features smooth scrolling sections for About, Experience, Projects, and Contact
 */

// Page metadata
useHead({
  title: 'Jerome Louie De Vera',
  meta: [
    { name: 'description', content: 'Full-stack developer specializing in modern web applications, UI/UX design, and user-centered solutions.' }
  ]
})

// Reactive data for scroll to top functionality
const showScrollTop = ref(false)

// Cursor glow functionality
const cursorGlowRef = ref(null)
const { glowColor } = useBackgroundGlow() // Dynamic background-complementary color

/**
 * Handles scroll event to show/hide scroll to top button and update active section
 */
const handleScroll = () => {
  if (typeof window === 'undefined') return
  
  // Update scroll to top button visibility
  showScrollTop.value = window.scrollY > 300
  
  // Update scrolled state for other UI elements
  isScrolled.value = window.scrollY > 10
  
  // Update active section based on scroll position
  const sections = ['#about', '#experience', '#projects']
  const scrollPosition = window.scrollY + 100
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.querySelector(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

/**
 * Scrolls to the top of the page with smooth animation
 */
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// Add scroll event listener when component mounts
onMounted(() => {
  // Ensure we're on the client side
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    // Call handleScroll once to set initial state
    handleScroll()
  }
})

// Clean up event listener when component unmounts
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})

// Typing effect for hero section
const { currentText: typedText } = useTypingEffect([
  'Software Engineer',
  'Backend Developer',
  'Full-Stack Developer',
  'Laravel Developer',
  'API Architect'
], 100, 2000)

// Experience data
const experience = [
  {
    title: 'Mid-Level Software Engineer',
    company: 'YNS PH',
    period: '2024 - Present',
    description: 'Backend Developer, Project Leader, System Maintenance and Development.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'AWS', 'Vue.js', 'Nuxtjs', 'JQuery', 'Cake PHP', 'Stripe', 'Django', 'AI Integration'],
    url: 'https://yns.ph/'
  },
  {
    title: 'Software Engineer',
    company: 'YNS PH',
    period: '2022 - 2024',
    description: 'Backend Developer, System Maintenance and Development.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'AWS', 'Vue.js', 'Nuxtjs', 'JQuery', 'Cake PHP', 'Stripe'],
    url: 'https://yns.ph/'
  },
  {
    title: 'Team Leader / Web Developer (Full-Stack)',
    company: 'HRD (S) PTE., LTD.',
    period: '2020 - 2021',
    description: 'Creating web system, handle dev team and projects during development until deployment. Managing task distribution and also troubleshoot.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'AWS', 'Vue.js', 'Vuetify', 'Node.js', 'JQuery', 'Bootstrap', 'VB script', 'FreePascal'],
    url: 'https://www.hrd-s.com/'
  },
  {
    title: 'Web Developer (Full-Stack)',
    company: 'HRD (S) PTE., LTD.',
    period: '2016 - 2020',
    description: 'System Maintenance for Japanese CAD software. Creating Plan Production systems, deployments and troubleshoot bugs/errors.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'AWS', 'Vue.js', 'Vuetify', 'Node.js', 'JQuery', 'Bootstrap', 'VB script', 'FreePascal'],
    url: 'https://www.hrd-s.com/'
  },
  {
    title: 'Office Staff',
    company: 'HRD (S) PTE., LTD.',
    period: '2014 - 2016',
    description: 'CAD encoder and System Maintenance of Japanese CAD software (ArchiTrend 21, Walk-in-Home, etc.)',
    url: 'https://www.hrd-s.com/'
  },
  {
    title: 'Office Assistant',
    company: 'HRD (S) PTE., LTD.',
    period: '2011 - 2014',
    description: 'CAD encoder using Japanese Software',
    url: 'https://www.hrd-s.com/'
  }
]

// Featured projects
const featuredProjects = [
  // {
  //   id: 1,
  //   title: 'CAD imanager (In-House System)',
  //   description: 'Company internal system where each department can manage and monitor the plan status.',
  //   technologies: ['PHP', 'MySQL', 'JQuery', 'Bootstrap4'],
  //   // liveUrl: 'https://example.com',
  //   // githubUrl: 'https://github.com'
  // },
  // {
  //   id: 2,
  //   title: 'iCAD Monitoring System',
  //   description: 'Monitoring of iCAD software investigation, request modification and function between the company and application developer.',
  //   technologies: ['PHP', 'MySQL', 'JQuery', 'Bootstrap4'],
  //   // liveUrl: 'https://example.com',
  //   // githubUrl: 'https://github.com'
  // },
  // {
  //   id: 3,
  //   title: 'Excel Bundle Uploader (In-House System)',
  //   description: 'Automatic fetching of the affected process by uploading excel file which use in plan production.',
  //   technologies: ['PHP', 'MySQL', 'JQuery', 'Bootstrap4'],
  //   // liveUrl: 'https://example.com',
  //   // githubUrl: 'https://github.com'
  // },
  // {
  //   id: 4,
  //   title: 'CAD computations',
  //   description: 'Convert all existing computation excel format into web.',
  //   technologies: ['PHP', 'JQuery', 'Bootstrap4'],
  //   // liveUrl: 'https://example.com',
  //   // githubUrl: 'https://github.com'
  // },
  {
    id: 1,
    title: 'GE Perfume Collection',
    type: 'Personal',
    description: 'A simple page promotion for GE perfume products.',
    technologies: ['Nuxtjs', 'Tailwind CSS', 'JQuery'],
    liveUrl: 'https://ge-perfume-collection.github.io/geperfume/',
    githubUrl: 'https://github.com/jldevera/geperfume'
  },
  {
    id: 2,
    title: 'Eleven Milim Letter Mobile App (iOS/Android)',
    type: 'Collaborative Project',
    description: 'A smartphone app that displays the website in a web view. The main function is the digitization of school-parent contact.',
    technologies: ['React Native Expo', 'Firebase'],
    liveUrl: 'https://play.google.com/store/apps/details?id=jp.milim.milimletter&amp;hl=en_US&pli=1',
    // liveUrl: 'hhttps://apps.apple.com/app/%E3%83%9F%E3%83%A9%E3%82%A4%E3%83%A0%E3%83%AC%E3%82%BF%E3%83%BC/id6499002238',
    // githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Subpass',
    type: 'Collaborative Project',
    description: 'A flat-rate service that allows user to receive benefits at member stores throughout Japan through their subscription.',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'JQuery', 'Stripe'],
    liveUrl: 'https://sub-pass.jp/',
    // githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Uchida-Kraepelin Test Diagnostic System',
    type: 'Collaborative Project',
    description: 'Test Diagnostic System for animal (poultry and livestock).',
    technologies: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'JQuery'],
    liveUrl: 'https://uktest.jp/user/login',
    // githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Necoweb',
    type: 'Collaborative Project',
    description: 'Maintenance of Entertainment / TV (CS) program WEB site in Japan.',
    technologies: ['Cake PHP', 'MySQL', 'JQuery', 'CSS'],
    liveUrl: 'https://www.necoweb.com/neco/',
    // githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Babylon',
    type: 'Collaborative Project',
    description: 'Horse racing betting platform.',
    technologies: ['Nuxtjs', 'Tailwind CSS', 'Laravel', 'MySQL', 'JQuery'],
    liveUrl: 'https://k-babylon.jp/',
    // githubUrl: 'https://github.com'
  },
]
</script> 