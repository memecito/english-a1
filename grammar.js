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
  }
};
