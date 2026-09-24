// Ejercicios de gramática, por tema. Cada item es una frase con un
// hueco ("___") y la(s) respuesta(s) correcta(s). El id de cada item
// tiene que ser estable (se usa como clave del sistema Leitner) — no
// reordenar ni borrar ids ya usados, solo añadir nuevos al final.
// Personajes reutilizados del libro de la academia (Complete Key for
// Schools) para que suene familiar: Sophie, Thiago, Laura, Ellie, Chloe.
const GRAMMAR = {
  pronouns: {
    title: "Pronombres personales",
    emoji: "🙋",
    topicId: "pronouns",
    items: [
      // pronombres sujeto
      { id: "subj1", text: "Sophie is 13. ___ lives near the school.", answers: ["she"] },
      { id: "subj2", text: "Thiago and Sophie are classmates. ___ go to the same school.", answers: ["they"] },
      { id: "subj3", text: "This is my new backpack. ___ is green.", answers: ["it"] },
      { id: "subj4", text: "Laura and I sit together. ___ are good friends.", answers: ["we"] },
      { id: "subj5", text: "Are ___ hungry, Thiago?", answers: ["you"] },
      // pronombres objeto
      { id: "obj1", text: "Ellie has a dog called Rufus. She loves ___ very much.", answers: ["it"] },
      { id: "obj2", text: "Sophie is very kind. Everybody likes ___.", answers: ["her"] },
      { id: "obj3", text: "Thiago has a new phone. Can you call ___ later?", answers: ["him"] },
      { id: "obj4", text: "Laura and Chloe are my friends. I always help ___ with homework.", answers: ["them"] },
      { id: "obj5", text: "I can't open this door. Can you help ___?", answers: ["me"] },
      // adjetivos posesivos
      { id: "padj1", text: "This is Thiago. ___ backpack is red.", answers: ["his"] },
      { id: "padj2", text: "I have two sisters. ___ names are Ana and Eva.", answers: ["my"] },
      { id: "padj3", text: "Is this ___ pencil, Laura?", answers: ["your"] },
      { id: "padj4", text: "The cat is sleeping in ___ bed.", answers: ["its"] },
      { id: "padj5", text: "Ellie and Mark are brother and sister. ___ mum is a teacher.", answers: ["their"] },
      // pronombres posesivos
      { id: "ppron1", text: "This pencil is Sophie's. It's ___.", answers: ["hers"] },
      { id: "ppron2", text: "These shoes aren't mine. They're ___, said Thiago.", answers: ["his"] },
      { id: "ppron3", text: "That bag isn't mine, Laura. It's ___.", answers: ["yours"] },
      { id: "ppron4", text: "This isn't your ball. It's ___, said Thiago and Sophie.", answers: ["ours"] },
      { id: "ppron5", text: "The blue car is Mr. Smith's. It's ___.", answers: ["his"] },
    ]
  },
  pastSimple: {
    title: "Pasado simple",
    emoji: "⏳",
    topicId: "pastSimple",
    items: [
      // be: was/were
      { id: "be1", text: "Yesterday, Sophie ___ at school.", answers: ["was"] },
      { id: "be2", text: "Thiago and Laura ___ at the museum last week.", answers: ["were"] },
      { id: "be3", text: "___ you at home last night?", answers: ["were"] },
      // regulares: las 4 reglas de ortografía
      { id: "reg1", text: "Ellie ___ (watch) a film last night.", answers: ["watched"] },
      { id: "reg2", text: "Chloe ___ (like) the music at the party.", answers: ["liked"] },
      { id: "reg3", text: "They ___ (stop) the car near the school.", answers: ["stopped"] },
      { id: "reg4", text: "Laura ___ (study) for the exam yesterday.", answers: ["studied"] },
      { id: "reg5", text: "We ___ (play) football on Saturday.", answers: ["played"] },
      // did / didn't
      { id: "did1", text: "___ you finish your homework?", answers: ["did"] },
      { id: "did2", text: "Sophie ___ like the film. She thought it was boring.", answers: ["didn't"] },
      { id: "did3", text: "What ___ Thiago do after school yesterday?", answers: ["did"] },
      { id: "did4", text: "We ___ go to the party — we were too tired.", answers: ["didn't"] },
      // irregulares
      { id: "irr1", text: "Yesterday, Ellie ___ (go) to the museum.", answers: ["went"] },
      { id: "irr2", text: "Thiago ___ (have) a great time at the party.", answers: ["had"] },
      { id: "irr3", text: "Sophie ___ (see) her friend at the shop.", answers: ["saw"] },
      { id: "irr4", text: "I ___ (eat) a big breakfast this morning.", answers: ["ate"] },
      { id: "irr5", text: "Laura ___ (take) lots of photos on holiday.", answers: ["took"] },
      { id: "irr6", text: "Chloe ___ (get) a new phone for her birthday.", answers: ["got"] },
      { id: "irr7", text: "My parents ___ (give) me a bike last year.", answers: ["gave"] },
      { id: "irr8", text: "Thiago ___ (come) to school late yesterday.", answers: ["came"] },
      { id: "irr9", text: "We ___ (do) our homework together.", answers: ["did"] },
      { id: "irr10", text: "Sophie ___ (drink) a glass of orange juice.", answers: ["drank"] },
      { id: "irr11", text: "Ellie ___ (buy) a new dress for the party.", answers: ["bought"] },
      { id: "irr12", text: "Laura ___ (make) a cake for her mum.", answers: ["made"] },
      { id: "irr13", text: "Thiago ___ (write) a letter to his cousin.", answers: ["wrote"] },
      { id: "irr14", text: "Chloe ___ (break) her phone yesterday.", answers: ["broke"] },
      { id: "irr15", text: "Sophie ___ (find) her keys under the sofa.", answers: ["found"] },
      { id: "irr16", text: "Yesterday, we ___ (meet) our new teacher.", answers: ["met"] },
    ]
  },
  adverbsFrequency: {
    title: "Adverbios de frecuencia",
    emoji: "🔁",
    topicId: "adverbsFrequency",
    items: [
      // regla 1: después de "be"
      { id: "be1", text: "Sophie is ___ (100%) happy on her birthday.", answers: ["always"] },
      { id: "be2", text: "The shop is ___ (0%) open on Sundays.", answers: ["never"] },
      { id: "be3", text: "My grandparents are ___ (90%) tired after a long trip.", answers: ["usually"] },
      { id: "be4", text: "Thiago is ___ (30%) late for school.", answers: ["sometimes"] },
      { id: "be5", text: "The bus is ___ (70%) full in the morning.", answers: ["often"] },
      // regla 2: antes de otros verbos
      { id: "verb1", text: "Laura ___ (100%) walks to school.", answers: ["always"] },
      { id: "verb2", text: "Chloe ___ (90%) does her homework after dinner.", answers: ["usually"] },
      { id: "verb3", text: "We ___ (70%) go to the cinema on Saturdays.", answers: ["often"] },
      { id: "verb4", text: "Ellie ___ (30%) plays tennis with her dad.", answers: ["sometimes"] },
      { id: "verb5", text: "Thiago ___ (0%) eats vegetables.", answers: ["never"] },
      { id: "verb6", text: "The teacher is ___ (70%) strict about homework.", answers: ["often"] },
      // regla 3: negativas, entre don't/doesn't y el verbo
      { id: "neg1", text: "I don't ___ get up early at the weekend, but sometimes I do.", answers: ["always"] },
      { id: "neg2", text: "Sophie doesn't ___ have lunch at school — only on Mondays.", answers: ["usually"] },
      // expresiones de tiempo (principio o final de la frase)
      { id: "time1", text: "Laura has piano lessons ___ (1 time per week).", answers: ["once a week"] },
      { id: "time2", text: "___ (1 time per year), we go on holiday to Spain.", answers: ["every year"] },
      { id: "time3", text: "Thiago visits his cousins ___ (2 times a year).", answers: ["twice a year"] },
    ]
  }
};
