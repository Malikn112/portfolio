/*
  ================================================================
  YOUR WEBSITE CONTENT LIVES HERE
  ================================================================
  Edit this file to change anything on the site. You never need to
  touch index.html for normal updates.

  - To ADD A PROJECT: copy one whole { ... } block inside `projects`,
    paste it after the last one, put a comma between blocks, and
    change the text. The site builds the card for you.
  - To ADD PICTURES: put the image in the `images` folder, then add
    its path to that project's `images` list, e.g. "images/voice-1.jpg".
    Your own photo goes in images/profile.jpg.
  - Status options: "Live", "Prototype", "In build"
  - Leave a field as "" (empty) to hide it.
  ================================================================
*/

window.SITE = {

  profile: {
    name: "Malik Naveed",
    role: "Agentic AI Consultant · Forward Deployed Engineer",
    location: "Riyadh, Saudi Arabia",
    availability: "Open to FDE, Solutions Engineer and AI Engineer roles",
    headline: "I put AI agents to work inside real businesses.",
    intro: "I sit with the team that has the problem, build the agent around how they actually work, and keep a person in charge of every step that matters. Most of my work is for Saudi businesses, where the agent also has to respect PDPL and the local labour rules.",
    photo: "images/profile.jpg",   // your picture: shown at the top and in About
    greeting: "Hi, I'm Malik.",
    shortIntro: "Software engineer in Riyadh. I design and deploy AI agents that answer calls, read documents and follow Saudi rules.",
    about: [
      "I'm a software engineer based in Riyadh. I studied software engineering at the University of Lahore and did my master's in Computer Science in Istanbul.",
      "I started out in marketing, moved into computer vision as an AI Specialist, and now spend my time building agents that do real work: answering phone calls, reading receipts and ledgers, and answering questions from regulations that change every year.",
      "The part I enjoy most is the gap between a demo and a deployment. A demo works on clean data. A deployment works on a blurry receipt photographed in a car park at 11pm. Closing that gap is what a Forward Deployed Engineer does, and it's the job I want."
    ],
    languages: "English (professional), Urdu, Hindi, Turkish"
  },

  contact: {
  phone: "+966 57 9236811",
   whatsapp: "+966 57 9236811",
    email: "naveedmalik5258@gmail.com",          // e.g. "you@example.com"
    linkedin: "www.linkedin.com/in/malik-naveed-ai",       // e.g. "https://www.linkedin.com/in/your-name"
    github: "https://github.com/Malikn112",
    cvLink: ""          // optional link to your CV PDF, e.g. "images/Malik-Naveed-CV.pdf"
  },

  /* The animated "agent run" panel at the top of the page.
     kind: "trigger" | "tool" | "think" | "human" | "done" */
  heroRuns: [
    {
      title: "Inbound call · restaurant",
      steps: [
        { kind: "trigger", text: "Call answered on line 2" },
        { kind: "think",   text: "Intent detected: table booking, 12 people" },
        { kind: "tool",    text: "check_availability(Thu 9:00pm)" },
        { kind: "tool",    text: "hold_table(#12)" },
        { kind: "human",   text: "Large-group rule: manager approval" },
        { kind: "done",    text: "Booking confirmed, SMS sent" }
      ]
    },
    {
      title: "Receipt photo · expense scanner",
      steps: [
        { kind: "trigger", text: "Receipt photo uploaded" },
        { kind: "tool",    text: "extract_fields(vendor, date, VAT, total)" },
        { kind: "think",   text: "Total 184.50 SAR matches line items" },
        { kind: "tool",    text: "check_vat_number(3001…)" },
        { kind: "human",   text: "Low-confidence field: user review" },
        { kind: "done",    text: "Saved to ledger, ready for export" }
      ]
    },
    {
      title: "Policy question · labour-law RAG",
      steps: [
        { kind: "trigger", text: "Question: end-of-service for 6 years?" },
        { kind: "tool",    text: "search(labour_law, top_k=5)" },
        { kind: "think",   text: "3 relevant articles found" },
        { kind: "tool",    text: "draft_answer(with citations)" },
        { kind: "human",   text: "Cited articles shown for checking" },
        { kind: "done",    text: "Answer returned with sources" }
      ]
    }
  ],

  /* How you work: shown as numbered steps */
  approach: [
    { title: "Sit with the team", text: "I start where the work happens. Who handles the calls, which spreadsheet they trust, where things get stuck." },
    { title: "Map the workflow", text: "Every step becomes a box: trigger, decision, tool, hand-off. The agent only gets the boxes it can do better than a person." },
    { title: "Build inside their systems", text: "The agent plugs into what they already use, whether that's WhatsApp, a phone line, a ledger or a booking tool. No new app for staff to learn." },
    { title: "Keep a human in charge", text: "Anything that costs money, touches personal data or can't be undone waits for approval. That rule goes in on day one." },
    { title: "Measure, then hand over", text: "I track what the agent got wrong, fix it, and leave the team with something they can run without me." }
  ],

  /* ===================== PROJECTS ===================== */
  projects: [
    {
      title: "AI Expense Scanner",
      status: "In build",
      year: "2026",
      tagline: "Photograph a receipt or drop in a ledger. Ask questions about your spending in plain English.",
      problem: "Small businesses and accountants still type receipts and ledgers into spreadsheets by hand. Formats are all over the place: phone photos, PDFs, Excel sheets, Word files.",
      built: [
        "Camera and file upload that reads receipts, invoices and ledgers and maps every value to the right field",
        "Editable review list so a person checks anything the model isn't sure about, then exports to Excel",
        "A spending analyst chat agent that queries the saved data to answer questions like \"what did I spend on fuel in August?\"",
        "Company check for accountants: enter a client's VAT number and see whether the business is registered"
      ],
      flow: ["Photo or file", "Extract fields", "Human review", "Ledger", "Chat agent"],
      stack: ["Claude API", "LangChain", "LangGraph", "Vision extraction", "Excel export"],
      images: [],          // e.g. ["images/expense-1.jpg", "images/expense-2.jpg"]
      links: { demo: "", code: "" }
    },
    {
      title: "Voice Agent for Restaurants & Hotels",
      status: "In build",
      year: "2026",
      tagline: "An AI agent that picks up the phone, takes orders and books tables, on two lines at once.",
      problem: "Restaurants miss calls at peak hours, and every missed call is a lost order. Hiring someone to sit by the phone costs more than most small places can justify.",
      built: [
        "Speech-to-text, LLM and text-to-speech chained through third-party APIs, so each part can be swapped as prices change",
        "Two concurrent lines per restaurant, so a second caller never hears a busy tone",
        "A per-restaurant cost model built before the agent, so the price was set from real API costs rather than a guess",
        "Planned extension for restaurants that run their delivery through Keeta"
      ],
      flow: ["Incoming call", "Speech to text", "Agent + tools", "Text to speech", "Order logged"],
      stack: ["Speech-to-text", "LLM tool calling", "Text-to-speech", "Telephony API"],
      images: [],
      links: { demo: "", code: "" }
    },
    {
      title: "Saudi Labour Law RAG",
      status: "Prototype",
      year: "2026",
      tagline: "A private assistant that answers questions from Saudi labour law and the Nitaqat and Qiwa rules, with the source article attached.",
      problem: "HR teams and recruiters answer the same regulation questions every week, and a wrong answer on end-of-service or Saudization quotas is expensive. General chatbots make up article numbers.",
      built: [
        "Ingestion of the English versions of Saudi labour law plus the Nitaqat and Qiwa rules into a search index",
        "Retrieval that pulls the most relevant articles before the model writes a word, and shows them next to the answer",
        "Runs fully offline on a laptop with a local model, so no document or question leaves the machine",
        "Reused as the rule layer for a CV screening pipeline that checks candidates against trade requirements"
      ],
      flow: ["Question", "Search index", "Top articles", "Local LLM", "Answer + sources"],
      stack: ["Python", "OpenSearch", "Ollama", "Streamlit", "RAG"],
      images: [],
      links: { demo: "", code: "" }
    }
  ],

  /* ===================== EXPERIENCE ===================== */
  experience: [
    {
      role: "Founder & Forward Deployed Engineer",
      org: "Vox Vencer",
      when: "Current",
      summary: "Vox Vencer is the name I take client engagements under. The work is forward deployed: I join the client's team, learn the process, and build the agent or the software inside their environment.",
      points: [
        "Audited a client's existing AI agents for data privacy and Saudi government requirements under PDPL, mapping where personal data flows and where approval steps were missing",
        "Built a Google Business Profile automation that manages posts, AI-drafted review replies and photos across several profiles, with a person approving anything public",
        "Delivered custom web development for clients, including PHP/Laravel builds"
      ]
    },
    {
      role: "AI Specialist, Computer Vision",
      org: "",
      when: "Jan 2022 – Mar 2023",
      summary: "Built and trained computer vision models.",
      points: []
    },
    {
      role: "Marketing Manager",
      org: "Marmol Overseas Employment",
      when: "Earlier",
      summary: "Ran marketing for an overseas employment agency. It's where I learned how hiring across borders actually works, which still shapes how I build HR and recruitment tools.",
      points: []
    }
  ],

  education: [
    { degree: "MSc Computer Science", school: "Altınbaş Üniversitesi, Istanbul" },
    { degree: "BS Software Engineering", school: "University of Lahore" }
  ],

  /* ===================== SKILLS =====================
     usedIn: short notes on where you've used it. */
  skills: [
    {
      group: "Agent design",
      items: ["Tool calling", "LangChain", "LangGraph", "Human-in-the-loop approval", "Multi-step workflows"],
      usedIn: "Expense chat agent, review-reply automation, a personal agent that drafts LinkedIn posts and waits for my approval"
    },
    {
      group: "Retrieval & documents",
      items: ["RAG", "OpenSearch", "Embeddings", "Ollama", "Document extraction"],
      usedIn: "Labour-law assistant, a CV screening pipeline that reads PDFs, Word files and WhatsApp photos"
    },
    {
      group: "Voice & chat",
      items: ["Speech-to-text", "Text-to-speech", "Telephony", "WhatsApp bots"],
      usedIn: "Restaurant voice agent, booking chatbots"
    },
    {
      group: "Automation",
      items: ["n8n", "Scheduled jobs", "Approval queues", "Prompt-to-video pipelines"],
      usedIn: "Business profile automation, an agent that turns a prompt into a short narrated explainer video"
    },
    {
      group: "Product engineering",
      items: ["Python", "React Native / Expo", "Supabase", "PostgreSQL + PostGIS", "Redis", "PHP / Laravel", "HTML / CSS / JS"],
      usedIn: "A barber booking and live-dispatch app for Riyadh (MVP), a salon website with WhatsApp booking"
    },
    {
      group: "AI governance & Saudi compliance",
      items: ["PDPL", "Agent audits", "Nitaqat", "Qiwa", "ZATCA"],
      usedIn: "Client agent audit, a patient-intake agent I built to practise audits on"
    },
    {
      group: "Computer vision",
      items: ["Model training", "Image pipelines"],
      usedIn: "AI Specialist role, 2022 to 2023"
    }
  ]
};
