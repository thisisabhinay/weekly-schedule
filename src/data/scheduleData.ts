import { ScheduleData } from '@/types/schedule';

const descriptions = {
  courseLearningNotes: "Like taking notes during a lecture. When you're watching Frontend Masters videos, these are your detailed notes capturing key concepts, code examples, and your own insights. The \"Course\" prefix clearly ties it to your learning materials.",
  studyGuideCreation: "Think of this as creating your own textbook. You're taking your Course Learning Notes and organizing them into structured reference materials with clear categories, examples, and explanations. This makes them more useful for future review.",
  algorithmExplanations: "These are your detailed breakdowns of how you solved LeetCode problems. Like a math textbook showing the steps to solve an equation, these document your problem-solving approach, including the thought process, different solutions considered, and optimization techniques.",
  projectImplementationJournal: "Similar to a lab notebook, this captures the technical details of how you built your projects. It includes architecture decisions, challenges overcome, and technical specifications - material that's valuable for both portfolio presentation and future reference.",
  interviewResponseLibrary: "Think of this as your personal interview preparation guide. It contains polished responses to common interview questions, technical explanations, and system design solutions, organized by topic for easy reference.",
  technicalSpecifications: "This is your professional documentation for completed projects, like user manuals or technical guides. It includes setup instructions, API documentation, and usage guidelines that would be valuable for other developers.",
  portfolioContentDevelopment: "This is about transforming your technical work into presentable portfolio pieces. It includes creating case studies, project summaries, and technical blog post drafts that showcase your skills.",
  devLogs: "Like a scientist's research journal, this is your daily record of what you worked on, problems solved, and lessons learned. It's more informal than other documentation types and helps track your progress.",
  codeRecipes: "This is your collection of reusable code solutions, like a cookbook of tried-and-tested code patterns. It includes common implementation patterns, useful functions, and code snippets with explanations of when and how to use them.",
};

export const scheduleData: ScheduleData = {
  headers: ['Time Block', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekend (Flexible)'],
  timeBlocks: [
    {
      name: 'Morning Block\n(2.5h)',
      days: [
        [
          { activity: { text: 'Frontend Masters' }, duration: '2h' },
          { activity: { text: 'Course Learning Notes', description: descriptions.courseLearningNotes }, duration: '30m' }
        ],
        [
          { activity: { text: 'Client Project' }, duration: '2h' },
          { activity: { text: 'Project Implementation Journal', description: descriptions.projectImplementationJournal }, duration: '30m' }
        ],
        [
          { activity: { text: 'LeetCode Practice' }, duration: '2h' },
          { activity: { text: 'Algorithm Explanations', description: descriptions.algorithmExplanations }, duration: '30m' }
        ],
        [
          { activity: { text: 'Frontend Masters' }, duration: '2h' },
          { activity: { text: 'Study Guide Creation', description: descriptions.studyGuideCreation }, duration: '30m' }
        ],
        [
          { activity: { text: 'Client Project' }, duration: '2h' },
          { activity: { text: 'Project Implementation Journal', description: descriptions.projectImplementationJournal }, duration: '30m' }
        ],
        [
          { activity: { text: 'Course Catch-up OR\nPersonal Projects' }, duration: 'Flexible timing' }
        ]
      ]
    },
    {
      name: 'Afternoon Block\n(2.5h)',
      days: [
        [
          { activity: { text: 'LeetCode' }, duration: '1.5h' },
          { activity: { text: 'Algorithm Explanations', description: descriptions.algorithmExplanations }, duration: '1h' }
        ],
        [
          { activity: { text: 'Personal Website' }, duration: '1.5h' },
          { activity: { text: 'Project Implementation Journal', description: descriptions.projectImplementationJournal }, duration: '1h' }
        ],
        [
          { activity: { text: 'Mock Interviews' }, duration: '1.5h' },
          { activity: { text: 'Interview Response Library', description: descriptions.interviewResponseLibrary }, duration: '1h' }
        ],
        [
          { activity: { text: 'Case Study Writing' }, duration: '1.5h' },
          { activity: { text: 'Blog Draft' }, duration: '1h' }
        ],
        [
          { activity: { text: 'Portfolio Updates' }, duration: '1.5h' },
          { activity: { text: 'Weekly Review' }, duration: '1h' }
        ],
        [
          { activity: { text: 'Portfolio Content Development', description: descriptions.portfolioContentDevelopment }, duration: 'Optional' }
        ]
      ]
    },
    {
      name: 'Evening Block\n(2.5h)',
      days: [
        [
          { activity: { text: 'Course Project' }, duration: '1.5h' },
          { activity: { text: 'Dev Logs', description: descriptions.devLogs }, duration: '1h' }
        ],
        [
          { activity: { text: 'Tech Blog' }, duration: '1.5h' },
          { activity: { text: 'Social Updates' }, duration: '1h' }
        ],
        [
          { activity: { text: 'System Design' }, duration: '1.5h' },
          { activity: { text: 'Progress Log' }, duration: '1h' }
        ],
        [
          { activity: { text: 'Code Recipes', description: descriptions.codeRecipes }, duration: '1.5h' },
          { activity: { text: 'Social Content' }, duration: '1h' }
        ],
        [
          { activity: { text: 'Technical Specifications', description: descriptions.technicalSpecifications }, duration: '1.5h' },
          { activity: { text: 'Weekend Planning' }, duration: '1h' }
        ],
        [
          { activity: { text: 'Week Planning &\nReview' }, duration: 'As needed' }
        ]
      ]
    }
  ]
};