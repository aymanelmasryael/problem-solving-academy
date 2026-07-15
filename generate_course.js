const fs = require('fs');

const rawTOC = `1 What is Problem Solving_
2 How this course is structured
3 Problem Solving Frameworks
4 Download Companion Project
5 Course Overview
6 Health System Design
7 Health System Implementation
8 Scenario Complete
9 Bullets Healing
10 Health Bar not Updating
11 Health Bar not Updating 2
12 No Damage
13 Going under 0 and above Max
14 Bullets Spawning Wrong Position
15 Health Bar Incorrect
16 Error on Damage
17 Bullet not Moving
18 Health Bar Null Reference
19 Enemy dying instantly
20 Bullet not Damaging
21 Fast Bullet
22 Bullets no clean up
23 Bullets not damaging
24 Fix NullReferenceException
25 Not dealing damage
26 Intermission
27 Movement System Design
28 Movement System Implementation
29 Scenario Complete
30 Not Moving
31 Error
32 Movement is inverted
33 No diagonals
34 Not colliding with walls
35 Movement Slow Inconsistent
36 Player barely moves
37 Only Moves Right
38 Going through walls
39 Pebbles solid
40 Movement not linear
41 Player rotating
42 Movement jittery
43 Cannot push pebbles
44 Collisions strange
45 Inventory System Design + Implementation
46 Scenario Completed
47 Cannot pick up items
48 Items not being added
49 Picks up more stuff
50 Always has Apple
51 Picking object throws Error
52 Dropping items duplicates
53 Can only pick up One item
54 Cannot pick up items
55 Only adding Apples
56 Cannot pick up items
57 Not dropping items
58 Dropping items when empty throws Error
59 Invisible Items
60 Error picking items
61 Fix NullReferenceException
62 Items not showing UI
63 Drops multiple items at once
64 Crafting System Design + Implementation
65 Scenario Completed
66 Error InvalidOperation
67 Crafts without Inputs
68 Not Crafting Items
69 Gold ingots only taking one ore
70 Not crafting
71 Consuming too many items
72 Crafting Gold ingot with one ore
73 Cannot craft Gold ingot
74 Adding Gold ore doesn’t work
75 Add item NullReferenceException
76 Inventory Empty
77 Craft or Add with Error
78 Crafting consumes but no craft
79 Items all Apples
80 Inventory doesn’t work
81 Enemy AI Design + Implementation
82 Scenario Completed
83 Attacks too far
84 Aim wrong
85 Doesn’t Attack Player
86 Enemy doesn’t attack
87 Player dying in one shot
88 Shooting incorrectly
89 Enemy doesn’t find Player target
90 Enemy attacking from too far
91 Player not taking damage
92 Enemy shooting itself
93 Enemy moving while attacking
94 Fix NullReferenceException
95 Enemy shoots too far
96 Attacking too far
97 Fix Error
98 Bullets wrong
99 Enemy doesn’t find Player
100 Key Door System Design + Implementation
101 Scenario Completed
102 Fix NullReferenceException
103 Not picking up Keys
104 Cannot open Red Door
105 Door doesn’t open
106 Fix NullReferenceException
107 Red Door won’t open
108 Blue Door won’t open
109 Fix MissingReferenceException
110 Player not moving
111 Not picking keys
112 Not picking keys 2
113 Blue Key grabbed twice
114 Adding tons of keys
115 Key being removed
116 Key not being consumed
117 Inventory starts with Red Key
118 Key not being added
119 Gathering System Design + Implementation
120 Scenario Completed
121 Player not gathering anything
122 Player not gathering anything 2
123 Wood picked up double
124 First pickup 10
125 Gold gives Wood
126 Fix NullReferenceException
127 Animation not playing
128 Not gathering
129 Not gathering 2
130 Not picking up items
131 Start Stop inconsistent
132 Spawning too much Gold
133 Not gathering
134 Fix NullReferenceException
135 Save System – Design + Implementation
136 Scenario Completed
137 Game not loading
138 Fix NullReferenceException on Load
139 Not saving amounts
140 Not saving amounts 2
141 Not saving Gold ore in World
142 Not loading amounts
143 Not loading Wood objects
144 Interaction System – Design + Implementation
145 Scenario Completed
146 Cannot interact
147 Fix NullReferenceException
148 Cannot interact
149 Player not moving
150 Interact popup wrong
151 Stuck on picking Pistol
152 Fix Error NPC
153 Interacting in open space throws Error
154 Player starts off disappearing
155 Cannot pick up Pistol
156 Pistol vanishes on pickup
157 Cannot Interact with NPC
158 Cannot interact with Pistol
159 Pistol not following Player
160 Not interacting
161 Quest System – Design + Implementation
162 Scenario Completed
163 Starting Quest Error
164 Quests do not progress
165 Walk Quest not working
166 Walk Quest finishing too fast
167 Multiple Quests
168 Not picking up quests
169 Get Apples Quest not working
170 Quests not completing
171 Cannot start Quests
172 Cannot start Quests 2
173 Apples progress not working
174 Apple Quest not progressing
175 Starts with one Quest
176 Fix NullReferenceException starting Quest
177 Walking Quest doesn’t progress
178 Quests keep completing
179 Apples Quest not progressing
180 Equipment System – Design + Implementation
181 Scenario Completed
182 Equipment Visual Doesn’t Hide
183 Fix NullReferenceException Picking 1, 2
184 Active Visual Doesn’t Change
185 Cannot Select Pickaxe
186 UI Not Visible
187 UI Active not Updating
188 Bow not Shooting Arrows
189 Equip not Working
190 Bow doesn’t hide
191 Bow aiming wrong direction
192 Pickaxe not Working
193 UI Wrong
194 Fix NullReferenceException
195 Cannot Select Bow
196 Building System – Design + Implementation
197 Scenario Completed
198 Cannot Add Resources
199 Fix FirePit Error
200 Cannot Add Progress Construction
201 Cannot Interact FirePit
202 Second Building Construction Broken
203 Building House places FirePit
204 Final FirePit won’t burn
205 Not Picking Items
206 Cannot Build House
207 Cannot Add Items to Blueprint
208 Cannot Construct Building
209 Blueprint progress bar not working
210 Fix Error Construction Window
211 FirePit consumes all Wood
212 Cannot Build FirePit
213 UI Shows Buildings need Wood
214 Fix NaN Error
215 Needs System – Design + Implementation
216 Scenario Completed
217 Amount Above Max
218 UI Showing Hunger 100
219 Needs Stuck Zero
220 Apple Refilling Too Much
221 Inventory Shows Empty
222 Needs Bars Always Full
223 Player Doesn’t Take Damage Starving
224 Hunger and Thirst not going down
225 Fix NullReferenceException on starving
226 Instantly Starving
227 Wrong Hunger Thirst
228 Cannot Consume Anything
229 Not Consuming Anything
230 Player dies instantly Starving
231 Cannot Craft Royale with Cheese
232 Cannot Eat First Apple
233 Cannot Consume Items
234 Farming System – Design + Implementation
235 Scenario Completed
236 Cannot Interact Land Plot
237 Land Plot breaks after growing Seeds
238 Cannot Place Seeds
239 Instantly Harvestable
240 Cannot add Water
241 Growth instant
242 Cannot Harvest
243 Cannot Grow Plants
244 Plants not Growing
245 Fix Error Select Seeds UI
246 Harvesting Multiple Times
247 Cannot Plant Seeds
248 Cannot Add Water
249 Plants Grow without Water
250 Jumps from Seeds to Harvest
251 Harvest Banana does Nothing
252 Cannot Interact Land Plot
253 High Level Overview Intro
254 How to make Twitter
255 How to make Discord
256 How to make Steam`;

const lines = rawTOC.split('\n').filter(l => l.trim() !== '');
const generatedData = [];

function categorize(title) {
    let type = "Practical";
    let difficulty = "Intermediate";
    let tags = [];
    let exampleCode = "";
    
    if (title.toLowerCase().includes("design")) {
        type = "Architecture";
        difficulty = "Advanced";
        tags.push("Systems Design", "Architecture");
        exampleCode = "// System Architecture Outline\npublic interface ISystem {\n    void Initialize();\n}";
    }
    if (title.toLowerCase().includes("error") || title.toLowerCase().includes("exception")) {
        type = "Debugging";
        difficulty = "Expert";
        tags.push("Debugging", "Exceptions");
        exampleCode = "if (myObject == null) {\n    Debug.LogError('Object not found!');\n    return;\n}";
    }
    if (title.toLowerCase().includes("nullreference")) {
        type = "Troubleshooting";
        difficulty = "Beginner";
        tags.push("Null Check", "C#");
        exampleCode = "if (healthBarUI != null) {\n    healthBarUI.UpdateValue(currentHealth);\n}";
    }
    if (title.toLowerCase().includes("not")) {
        type = "Debugging";
        difficulty = "Intermediate";
        tags.push("Logic Error", "Game Loop");
        exampleCode = "void Update() {\n    if (!isMoving) return;\n    MovePlayer();\n}";
    }
    
    if (title.toLowerCase().includes("health")) tags.push("Health System");
    if (title.toLowerCase().includes("bullet")) tags.push("Combat", "Physics");
    if (title.toLowerCase().includes("inventory")) tags.push("Inventory", "Data Structure");
    if (title.toLowerCase().includes("movement")) tags.push("Physics", "Input");
    if (title.toLowerCase().includes("quest")) tags.push("Quest System");
    
    if (tags.length === 0) tags.push("General");
    if (!exampleCode) exampleCode = "// Ensure component exists before calling\nGetComponent<Rigidbody2D>().velocity = new Vector2(speed, 0);";
    
    return { type, difficulty, tags, exampleCode };
}

lines.forEach(line => {
    const match = line.match(/^(\d+)\s+(.*)$/);
    if (!match) return;
    
    const modId = match[1].padStart(3, '0');
    const title = match[2];
    
    const { type, difficulty, tags, exampleCode } = categorize(title);
    
    const obj = {
        id: "mod-" + modId,
        question: "Scenario: " + title + ". What is the systematic approach to solving this?",
        detailedAnswer: "To solve '" + title + "', you must first isolate the system involved. In Unity C# game development, this usually means checking if the scripts are correctly attached to GameObjects, verifying if variables are initialized in Awake/Start, and ensuring that your Update/FixedUpdate loops are processing logic correctly without race conditions.",
        whyCorrect: "This approach follows the standard debugging framework: Reproduce -> Isolate -> Diagnose -> Fix. Guessing without isolating often introduces new bugs.",
        whyIncorrect: "Arbitrarily changing code without understanding the root cause masks the architectural flaw.",
        realWorldExample: exampleCode,
        commonMistakes: "1. Forgetting to assign references in the Unity Inspector. 2. Instantiating objects out of order (Execution Order issues). 3. Spelling string names wrong in Resources.Load or tags.",
        bestPractices: "Use [SerializeField] to expose private variables safely. Use RequireComponent to guarantee dependencies. Always read the exact line number on the Stack Trace.",
        relatedConcepts: ["Debugging Frameworks", "C# Fundamentals", "Unity Component System"],
        difficulty: difficulty,
        estimatedReadingTime: Math.floor(Math.random() * 3) + 2 + " mins",
        relatedReferences: ["Learn Problem Solving Masterclass", "Unity Documentation"],
        interviewRelevance: (difficulty === "Expert" || difficulty === "Advanced") ? "High" : "Medium",
        tags: tags,
        source: "Learn Problem Solving Curriculum",
        type: type,
        relationships: {
            learningOutcome: "Master debugging techniques for: " + title,
            exercise: "Recreate the bug in an empty Unity scene and apply the fix.",
            challenge: "Fix this bug without using Debug.Log (using breakpoints instead).",
            interview: "How would you architect this system to prevent this bug entirely?"
        }
    };
    
    generatedData.push(obj);
});

const fileContent = "const academyData = " + JSON.stringify(generatedData, null, 4) + ";\n\nwindow.academyData = academyData;";
fs.writeFileSync('data.js', fileContent);
console.log("Successfully generated " + generatedData.length + " modules in data.js");
