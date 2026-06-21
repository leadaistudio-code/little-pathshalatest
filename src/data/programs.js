// Single source of truth for every program at Little Pathshala.
// Each entry powers one routed page at /programs/<slug> via ProgramDetail.
//
// Content here is original copy written for Little Pathshala, Faridabad —
// age-appropriate, EYFS & Montessori-inspired, play-based learning.

export const programs = [
  /* ───────────────────────── PLAY GROUP ───────────────────────── */
  {
    slug: 'play-group',
    title: 'Play Group',
    emoji: '🌱',
    color: 'green',
    age: '1.5 – 2.5 Years',
    ratio: '1 : 15',
    duration: '3 Hours',
    tagline: "Your child's very first step into the wonderful world of learning.",
    intro: [
      'Play Group is where the journey begins. Through gentle routines, sensory play and lots of joyful discovery, we help little ones settle into a happy, secure space away from home — often for the very first time.',
      'Our facilitators follow EYFS-inspired milestones, nurturing early cognitive, language, social and motor skills through exploration rather than instruction. Every day is built around curiosity, comfort and connection.',
    ],
    explores: ['Connect Time', 'Tearing & Pasting', 'Sorting & Matching', 'Music & Movement', 'Pretend Play', 'Sensory Trays', 'Story Time', 'Free Exploration'],
    schedule: [
      { title: 'Warm Welcome', desc: 'Children are greeted with a friendly puppet and a familiar morning ritual that helps them feel safe and at home.' },
      { title: 'Circle Time', desc: 'A gentle group session that builds early social and emotional connections through songs, names and greetings.' },
      { title: 'Life Skills', desc: 'Mindful moments, simple values and self-care habits introduced through play and everyday routines.' },
      { title: 'Concept Time', desc: 'A fresh monthly theme brings the world closer through colours, shapes, animals and seasons.' },
      { title: 'Rhyme Time', desc: 'Action rhymes and songs that grow vocabulary, rhythm and a love for language.' },
      { title: 'Story & Montessori', desc: 'Facilitator-led stories and hands-on Montessori trays invite children to explore at their own pace.' },
      { title: 'Nourishing Meals', desc: 'Freshly prepared, balanced meals planned with a certified child nutritionist, served in a calm, social setting.' },
      { title: 'Art & Wind-down', desc: 'Messy art, a quick recap of the day and a warm goodbye that ends every day on a happy note.' },
    ],
    outcomes: [
      { title: 'Early Skills We Nurture', items: ['Settling away from home with confidence', 'First friendships and turn-taking', 'Naming familiar objects, colours and sounds', 'Holding crayons and stacking, sorting, scribbling'] },
    ],
  },

  /* ───────────────────────── PRE-NURSERY ───────────────────────── */
  {
    slug: 'pre-nursery',
    title: 'Pre-Nursery',
    emoji: '🌿',
    color: 'yellow',
    age: '2 – 3 Years',
    ratio: '1 : 15',
    duration: '3 Hours',
    tagline: 'A confident step ahead — where curiosity turns into early learning.',
    intro: [
      'Pre-Nursery takes your child one happy step forward. At this stage little learners begin expressing preferences, following two-step instructions and holding short back-and-forth conversations.',
      'We channel that growing curiosity into early academics — pre-reading, counting, pattern-making and phonics — woven seamlessly into play. Learning is never confined to books; it lives in every song, walk and experiment.',
    ],
    explores: ['Painting', 'Dance', 'Phonics Fun', 'Sensory Exploration', 'Nature Walks', 'Magnifying-Glass Discovery', 'STEAM Play', 'Treasure Hunts'],
    schedule: [
      { title: 'Morning Basket', desc: 'A puppet greeting and handshakes ease children into the day with warmth and routine.' },
      { title: 'Circle Time', desc: 'Group conversations that build emotional awareness, listening and social confidence.' },
      { title: 'Life Skills', desc: 'Mindful moments and gentle lessons on respect, sharing and caring for our surroundings.' },
      { title: 'Concept Time', desc: 'Theme-driven monthly learning that builds early reading, counting and observation.' },
      { title: 'Rhyme Time', desc: 'Songs and rhymes that strengthen speech, memory and language development.' },
      { title: 'Reading & Montessori', desc: 'Picture-book sessions with thoughtful questions, plus self-directed Montessori activities.' },
      { title: 'Motor Skills', desc: 'Drawing, self-feeding, buttoning, hopping, balancing and tricycle play build fine and gross motor strength.' },
      { title: 'Nourishing Meals', desc: 'A wholesome, freshly cooked meal with seasonal favourites and a dedicated fruit break.' },
      { title: 'Arts & Recap', desc: 'Handprinting, clay and painting, worksheet time, a daily recap and a cheerful dispersal.' },
    ],
    outcomes: [
      { title: 'What Your Child Builds', items: ['Recognising shapes, sizes and quantities', 'Early letters, numbers and phonics sounds', 'Running, climbing and balancing with control', 'Expressing feelings and making choices'] },
    ],
  },

  /* ───────────────────────── NURSERY ───────────────────────── */
  {
    slug: 'nursery',
    title: 'Nursery',
    emoji: '🌸',
    color: 'pink',
    age: '3 – 4 Years',
    ratio: '1 : 15',
    duration: '3 Hours',
    tagline: 'Where little thinkers taste their first bit of independence.',
    intro: [
      'Nursery is where children grow into real little thinkers. Learning becomes an active, hands-on process — a joyful confrontation with the world around them and with their own ideas.',
      'Built on three simple pillars — active inquiry, joyful learning and the courage to keep trying — Nursery helps children read their first words, count with meaning and solve everyday problems on their own.',
    ],
    explores: ['Story Building', 'Phonics & Blending', 'Number Play', 'Pattern Hunts', 'Stage Time', 'Clay & Ceramics', 'Group Games', 'Show & Tell'],
    schedule: [
      { title: 'Morning Basket', desc: 'A puppet welcome and circle time set a warm, social tone for the day.' },
      { title: 'Life Skills', desc: 'Mindful moments and values like respect, gratitude and conserving resources.' },
      { title: 'Concept Time', desc: 'A monthly theme deepens understanding of the world and sparks early critical thinking.' },
      { title: 'Reading & Montessori', desc: 'Self-chosen books with open-ended questions and hands-on Montessori exploration.' },
      { title: 'Literacy Development', desc: 'Recognising upper and lower-case letters, singing phonics, blending two-letter words, telling stories and performing on stage.' },
      { title: 'Logical Development', desc: 'Counting to 50 orally and in writing, quantifying objects, spotting patterns, odd-one-out and real-world problem solving.' },
      { title: 'Motor Skills', desc: 'Holding utensils, cutting with scissors, drawing, throwing and catching, running and jumping.' },
      { title: 'Nourishing Meals', desc: 'Freshly cooked, balanced meals with seasonal cuisines and a fruit break.' },
      { title: 'Arts & Recap', desc: 'Tearing-pasting, clay, painting, worksheet time, a reflective recap and a happy goodbye.' },
    ],
    outcomes: [
      { title: 'Language & Literacy', items: ['Identifying letters in both cases', 'Phonics songs and two-letter blending', 'Building short stories and answering questions', 'Confidence to speak and perform on stage'] },
      { title: 'Logical Thinking', items: ['Numbers up to 50 — oral and written', 'Quantifying and comparing objects', 'Spotting patterns and odd-one-out', 'Solving simple real-world problems'] },
    ],
  },

  /* ───────────────────────── LKG ───────────────────────── */
  {
    slug: 'lkg',
    title: 'LKG (Lower Kindergarten)',
    emoji: '🌻',
    color: 'yellow',
    age: '4 – 5 Years',
    ratio: '1 : 15',
    duration: '5 Hours',
    tagline: 'A well-planned launch pad for a lifetime of learning.',
    intro: [
      'LKG marks the move into structured, school-ready learning. A carefully sequenced curriculum becomes the perfect launch pad — balancing strong academics with the life skills that shape thoughtful, capable, well-rounded children.',
      'Children explore bigger mathematical ideas like before, after and between, build sentences, and grow their Hindi and English together — developing musical, technological, numeracy, literacy, life and exploration skills along the way.',
    ],
    explores: ['Connect Time', 'Dramatisation', 'Life Cycles', 'Excursions', 'Hopscotch', 'Paper Origami', 'Dig & Find', 'Experiments'],
    schedule: [
      { title: 'Morning Basket', desc: 'A puppet welcome, circle time and group connection that build interpersonal and thinking skills.' },
      { title: 'Life Skills', desc: 'Mindful moments and values such as respecting elders and conserving energy and water.' },
      { title: 'Concept Time', desc: 'Theme-based learning that strengthens critical thinking and links ideas to the real world.' },
      { title: 'Reading & Montessori', desc: 'Library sessions with probing questions and hands-on Montessori discovery.' },
      { title: 'Language & Literacy', desc: 'Receptive and expressive language in Hindi and English — 3 & 4-letter words, digraphs, action and spatial words.' },
      { title: 'Logical Development', desc: 'Numbers to 100, backward counting, time, money, addition, subtraction, skip-counting and comparing numbers.' },
      { title: 'Motor Skills', desc: 'Cutting along a pattern, folding paper, 10–12 piece puzzles, hopping, galloping and jumping hurdles.' },
      { title: 'Nourishing Meals', desc: 'Freshly cooked, nutritious meals with seasonal and regional cuisines and a fruit break.' },
      { title: 'Arts & Recap', desc: 'Role-play, image talk, storytelling and group discussion, followed by a reflective recap and dispersal.' },
    ],
    outcomes: [
      { title: 'Language & Literacy', items: ['Listening and expressing in Hindi & English', '3 & 4-letter words and digraphs', 'Action, spatial and pointing words', 'Talking about transport, the universe and animals'] },
      { title: 'Numeracy & Logic', items: ['Numbers to 100, oral and written', 'Addition, subtraction and skip-counting', 'Time, money and number comparison', 'Reasoning, memory and drawing conclusions'] },
    ],
  },

  /* ───────────────────────── UKG ───────────────────────── */
  {
    slug: 'ukg',
    title: 'UKG (Upper Kindergarten)',
    emoji: '🌼',
    color: 'purple',
    age: '5 – 6 Years',
    ratio: '1 : 15',
    duration: '5 Hours',
    tagline: 'School-ready and STEAM-confident, ready to take on the big world.',
    intro: [
      'Our UKG programme is thoughtfully designed for children stepping into formal schooling. It blends science, technology, arts, mathematics and environmental exploration into one rich, hands-on STEAM experience.',
      'Children sharpen reading and writing in both Hindi and English, work confidently with numbers up to 200, and develop the focus, reasoning and independence that set them up to thrive in big school.',
    ],
    explores: ['Science Experiments', 'Tech & Building', 'Number Mastery', 'Eco Exploration', 'Art & Design', 'Reading Readiness', 'Logic Puzzles', 'Project Work'],
    schedule: [
      { title: 'Morning Basket', desc: 'A puppet welcome, circle time and rhyme time that build social and cognitive connections.' },
      { title: 'Life Skills', desc: 'Mindful moments, gratitude and respect for elders and the environment.' },
      { title: 'Concept Time', desc: 'Themes connected to nature and the wider world to spark inquiry and critical thinking.' },
      { title: 'Reading & Montessori', desc: 'Library selections with facilitator questioning and experiential Montessori materials.' },
      { title: 'Language & Literacy', desc: 'Bilingual reading and writing — three & four-letter words, digraphs, action and spatial terms.' },
      { title: 'Mathematics', desc: 'Numbers 1–200 hands-on, addition and subtraction, forward & backward counting, counting by 2s and 5s.' },
      { title: 'Motor Skills', desc: 'Cutting shapes, drawing recognisable pictures, tying laces, skipping, balancing and ball games.' },
      { title: 'Nourishing Meals', desc: 'Four wholesome courses planned with a certified child nutritionist — fresh, seasonal and balanced.' },
      { title: 'Arts & Recap', desc: 'Drawing, painting and design, creative worksheet time, a daily review and an encouraging goodbye.' },
    ],
    outcomes: [
      { title: 'Language & Literacy', items: ['Reading and writing in Hindi & English', 'Three & four-letter words and digraphs', 'Action, spatial and pointing words', 'Strong reading and writing readiness'] },
      { title: 'Mathematics', items: ['Numbers 1–200, hands-on', 'Addition, subtraction and number order', 'Forward, backward and skip counting', 'Logical reasoning and problem solving'] },
    ],
  },

  /* ───────────────────────── DAYCARE ───────────────────────── */
  {
    slug: 'daycare',
    title: 'Daycare & Crèche',
    emoji: '🧸',
    color: 'blue',
    age: '6 Months – 10 Years',
    ratio: '1 : 15',
    duration: '8:00 AM – 6:00 PM',
    tagline: 'A safe, loving home-away-from-home while you are away.',
    intro: [
      'Our daycare gives working parents complete peace of mind. We care for children from 6 months to 10 years in a warm, secure and stimulating space that blends play, rest and continuous learning.',
      'Every facilitator is trained in early childhood care and screened through thorough background checks. With live CCTV access, a parent app and daily activity reports, you stay connected to your child all day long.',
    ],
    explores: ['Half & Full Day', 'Live CCTV Access', 'Parent App Updates', 'Separate Nap Spaces', 'Hot Freshly-Cooked Meals', 'Music, Dance & Yoga', 'Outdoor Play', 'Daily Reports'],
    schedule: [
      { title: 'Arrival & Hygiene Check', desc: 'A warm welcome and a quick wellness and hygiene check to start the day right.' },
      { title: 'Breakfast', desc: 'A nutritious morning meal to fuel the day ahead.' },
      { title: 'Circle & Motor Activities', desc: 'Group time, songs and movement games that get little bodies and minds going.' },
      { title: 'Book Reading', desc: 'Cosy story sessions that build language and imagination.' },
      { title: 'Lunch & Nap Time', desc: 'A balanced hot lunch followed by restful sleep in calm, dedicated nap spaces.' },
      { title: 'Freshen-up & Outdoor Play', desc: 'A hygiene check and refresh, then exploration and play in the open air.' },
      { title: 'Snack Time', desc: 'A wholesome evening snack to recharge for the final stretch of the day.' },
      { title: 'Learning Activities', desc: 'Music, dance, yoga and drama keep afternoons joyful and enriching.' },
      { title: 'Departure', desc: 'A happy handover with a daily report of how your child spent their day.' },
    ],
    outcomes: [
      { title: 'Why Parents Trust Us', items: ['Certified, background-checked caregivers', 'Live CCTV and instant parent-app updates', 'Meals planned with a child nutritionist', 'Separate, safe spaces for naps and play'] },
    ],
  },
]

export const programBySlug = Object.fromEntries(programs.map((p) => [p.slug, p]))
