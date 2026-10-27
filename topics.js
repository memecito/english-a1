// Temas de teoría para la sección "Estudiar". Contenido revisado a
// mano (no viene de una extracción automática del libro: la academia
// no dedica una unidad propia a "pronombres", están repartidos por
// varias unidades — este tema los junta y explica de una vez).
const TOPICS = [
  {
    id: "pronouns",
    emoji: "🙋",
    title: "Pronombres personales",
    html: `
      <p>Los <b>pronombres personales</b> sustituyen a un nombre (una persona, un animal o una cosa) para no repetirlo todo el rato. En inglés, la forma cambia según qué función hacen en la frase — por eso hay cuatro tipos.</p>

      <h3>1. Pronombres sujeto — quién hace la acción</h3>
      <p>Van al principio de la frase, antes del verbo.</p>
      <table>
        <thead><tr><th>Español</th><th>Inglés</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>yo</td><td>I</td><td><b>I</b> live in Madrid.</td></tr>
          <tr><td>tú</td><td>you</td><td><b>You</b> are 13.</td></tr>
          <tr><td>él</td><td>he</td><td><b>He</b> is my brother.</td></tr>
          <tr><td>ella</td><td>she</td><td><b>She</b> is 12.</td></tr>
          <tr><td>ello / eso</td><td>it</td><td><b>It</b> is a red bike.</td></tr>
          <tr><td>nosotros/as</td><td>we</td><td><b>We</b> are friends.</td></tr>
          <tr><td>vosotros/as, ustedes</td><td>you</td><td><b>You</b> are late.</td></tr>
          <tr><td>ellos/ellas</td><td>they</td><td><b>They</b> live in London.</td></tr>
        </tbody>
      </table>

      <h3>2. Pronombres objeto — a quién le pasa la acción</h3>
      <p>Van después del verbo o después de una preposición (<i>to, with, for</i>…).</p>
      <table>
        <thead><tr><th>Español</th><th>Inglés</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>me</td><td>me</td><td>Can you help <b>me</b>?</td></tr>
          <tr><td>te</td><td>you</td><td>I like <b>you</b>.</td></tr>
          <tr><td>lo, le (a él)</td><td>him</td><td>Call <b>him</b> later.</td></tr>
          <tr><td>la, le (a ella)</td><td>her</td><td>I know <b>her</b>.</td></tr>
          <tr><td>lo (cosa)</td><td>it</td><td>Eat <b>it</b>!</td></tr>
          <tr><td>nos</td><td>us</td><td>Come with <b>us</b>.</td></tr>
          <tr><td>os, les (ustedes)</td><td>you</td><td>I'll text <b>you</b>.</td></tr>
          <tr><td>los, las, les</td><td>them</td><td>I play with <b>them</b>.</td></tr>
        </tbody>
      </table>

      <h3>3. Adjetivos posesivos — de quién es (+ nombre)</h3>
      <p>Siempre van <b>delante de un nombre</b>: nunca solos.</p>
      <table>
        <thead><tr><th>Español</th><th>Inglés</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>mi(s)</td><td>my</td><td><b>My</b> bag is blue.</td></tr>
          <tr><td>tu(s)</td><td>your</td><td>Is this <b>your</b> pencil?</td></tr>
          <tr><td>su(s) (de él)</td><td>his</td><td><b>His</b> backpack is red.</td></tr>
          <tr><td>su(s) (de ella)</td><td>her</td><td><b>Her</b> brother is Tom.</td></tr>
          <tr><td>su(s) (de eso)</td><td>its</td><td>The cat is in <b>its</b> bed.</td></tr>
          <tr><td>nuestro(s)/a(s)</td><td>our</td><td>We love <b>our</b> house.</td></tr>
          <tr><td>vuestro(s)/a(s)</td><td>your</td><td><b>Your</b> team won!</td></tr>
          <tr><td>su(s) (de ellos)</td><td>their</td><td><b>Their</b> car is red.</td></tr>
        </tbody>
      </table>

      <h3>4. Pronombres posesivos — de quién es (SIN nombre)</h3>
      <p>Sustituyen a "adjetivo posesivo + nombre": <i>This is my book</i> → <i>This is mine.</i></p>
      <table>
        <thead><tr><th>Español</th><th>Inglés</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>el mío / la mía</td><td>mine</td><td>This pen is <b>mine</b>.</td></tr>
          <tr><td>el tuyo / la tuya</td><td>yours</td><td>Is this <b>yours</b>?</td></tr>
          <tr><td>el suyo (de él)</td><td>his</td><td>These shoes are <b>his</b>.</td></tr>
          <tr><td>el suyo (de ella)</td><td>hers</td><td>That coat is <b>hers</b>.</td></tr>
          <tr><td>el nuestro / la nuestra</td><td>ours</td><td>This table is <b>ours</b>.</td></tr>
          <tr><td>el vuestro / la vuestra</td><td>yours</td><td>That's <b>yours</b>, not mine.</td></tr>
          <tr><td>el suyo (de ellos)</td><td>theirs</td><td>The blue car is <b>theirs</b>.</td></tr>
        </tbody>
      </table>

      <p><b>Truco para no liarte:</b> si después de la palabra va un nombre (<i>my dog</i>), es adjetivo posesivo. Si no va nada detrás (<i>it's mine</i>), es pronombre posesivo.</p>
    `
  },
  {
    id: "pastSimple",
    emoji: "⏳",
    title: "Pasado simple (Past Simple)",
    html: `
      <p>El <b>pasado simple</b> se usa para hablar de acciones terminadas en el pasado: <i>yesterday, last year, a week ago, last night</i>…</p>

      <h3>1. El verbo "be" (ser/estar) en pasado</h3>
      <table>
        <thead><tr><th>Sujeto</th><th>Afirmativa</th><th>Negativa</th></tr></thead>
        <tbody>
          <tr><td>I / he / she / it</td><td><b>was</b></td><td>wasn't</td></tr>
          <tr><td>you / we / they</td><td><b>were</b></td><td>weren't</td></tr>
        </tbody>
      </table>
      <p><i>We <b>were</b> at school yesterday. Our teacher <b>was</b> very nice.</i></p>

      <h3>2. Verbos regulares — se les añade "-ed"</h3>
      <p>La ortografía cambia un poco según cómo termine el verbo:</p>
      <table>
        <thead><tr><th>Regla</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>La mayoría: + <b>-ed</b></td><td>watch → <b>watched</b></td></tr>
          <tr><td>Acaba en <b>-e</b>: solo + <b>-d</b></td><td>like → <b>liked</b></td></tr>
          <tr><td>Una sílaba, vocal+consonante: dobla la consonante + <b>-ed</b></td><td>stop → <b>stopped</b></td></tr>
          <tr><td>Consonante + <b>-y</b>: cambia a <b>-ied</b></td><td>study → <b>studied</b></td></tr>
        </tbody>
      </table>

      <h3>3. Preguntas y negaciones — con "did / didn't"</h3>
      <p>Con <b>did</b> o <b>didn't</b>, el verbo va en infinitivo (sin "to" y sin "-ed"): <i>Did you go?</i> ✅ — <i>Did you went?</i> ❌</p>
      <table>
        <thead><tr><th></th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>Pregunta</td><td><b>Did</b> you <b>enjoy</b> the film?</td></tr>
          <tr><td>Respuesta corta</td><td>Yes, I <b>did</b>. / No, I <b>didn't</b>.</td></tr>
          <tr><td>Negativa</td><td>I <b>didn't watch</b> TV last night.</td></tr>
        </tbody>
      </table>

      <h3>4. Verbos irregulares — no siguen ninguna regla, hay que aprenderlos</h3>
      <p>Estos son algunos de los más comunes del libro (hay muchos más en la lista de verbos irregulares del libro, página 134 — estos son un buen punto de partida):</p>
      <table>
        <thead><tr><th>Presente</th><th>Pasado</th></tr></thead>
        <tbody>
          <tr><td>go</td><td><b>went</b></td></tr>
          <tr><td>have</td><td><b>had</b></td></tr>
          <tr><td>see</td><td><b>saw</b></td></tr>
          <tr><td>eat</td><td><b>ate</b></td></tr>
          <tr><td>take</td><td><b>took</b></td></tr>
          <tr><td>get</td><td><b>got</b></td></tr>
          <tr><td>give</td><td><b>gave</b></td></tr>
          <tr><td>come</td><td><b>came</b></td></tr>
          <tr><td>do</td><td><b>did</b></td></tr>
          <tr><td>drink</td><td><b>drank</b></td></tr>
          <tr><td>buy</td><td><b>bought</b></td></tr>
          <tr><td>make</td><td><b>made</b></td></tr>
          <tr><td>write</td><td><b>wrote</b></td></tr>
          <tr><td>break</td><td><b>broke</b></td></tr>
          <tr><td>find</td><td><b>found</b></td></tr>
          <tr><td>meet</td><td><b>met</b></td></tr>
        </tbody>
      </table>

      <p><b>Truco para no liarte:</b> si el verbo es regular, casi siempre suena a "-d" al final (watched, liked). Si al decirlo en pasado no suena así (go→went, see→saw), seguramente es irregular — toca memorizarlo.</p>
    `
  },
  {
    id: "adverbsFrequency",
    emoji: "🔁",
    title: "Adverbios de frecuencia",
    html: `
      <p>Los <b>adverbios de frecuencia</b> dicen con qué frecuencia pasa algo.</p>

      <table>
        <thead><tr><th>Inglés</th><th>Español</th><th>Frecuencia</th></tr></thead>
        <tbody>
          <tr><td><b>always</b></td><td>siempre</td><td>100%</td></tr>
          <tr><td><b>usually</b></td><td>normalmente</td><td>~90%</td></tr>
          <tr><td><b>often</b></td><td>a menudo</td><td>~70%</td></tr>
          <tr><td><b>sometimes</b></td><td>a veces</td><td>~30%</td></tr>
          <tr><td><b>never</b></td><td>nunca</td><td>0%</td></tr>
        </tbody>
      </table>

      <p>Lo importante de estos adverbios no es solo su significado — ya los conoces de vocabulario — sino <b>dónde van en la frase</b>. Ahí es donde suelen fallar los exámenes.</p>

      <h3>Regla 1 — Después del verbo "be"</h3>
      <p><i>They are <b>always</b> happy at the weekend.</i></p>

      <h3>Regla 2 — Antes de los demás verbos</h3>
      <p><i>I <b>often</b> get home at 5 o'clock.</i></p>

      <h3>Regla 3 — En negativas, entre "don't/doesn't" y el verbo</h3>
      <p><i>We don't <b>always</b> get up early at the weekend.</i> (= no siempre, a veces sí)</p>

      <h3>Expresiones de tiempo (every day, once a week…)</h3>
      <p>Van al principio o al final de la frase, nunca en medio:</p>
      <p><i><b>Every year</b>, we go on holiday to Italy.</i> / <i>I have piano lessons <b>once a week</b>.</i></p>

      <p><b>Truco para no liarte:</b> pregúntate primero si la frase tiene el verbo <i>be</i> (am/is/are) o no. Si SÍ lo tiene, el adverbio va justo después. Si NO (cualquier otro verbo), el adverbio va justo antes.</p>
    `
  },
  {
    id: "irregularVerbPatterns",
    emoji: "🧩",
    title: "Verbos irregulares: patrones para memorizar",
    html: `
      <p>Los verbos irregulares no siguen ninguna regla de ortografía (a diferencia de los regulares, que siempre añaden <i>-ed</i>) — hay que memorizarlos uno a uno. Pero memorizar 55 palabras sueltas es muy difícil. <b>Truco:</b> si los agrupas por patrón, aprendes varios a la vez en vez de uno por uno.</p>

      <p>Por eso los ejercicios están en <b>5 lotes</b>, del más fácil al más difícil.</p>

      <h3>Lote 1 — No cambian nada 🟢</h3>
      <p>El pasado y el participio son <b>iguales que el infinitivo</b>. Solo tienes que aprender que NO cambian.</p>
      <table>
        <thead><tr><th>Verbo</th><th>Pasado</th></tr></thead>
        <tbody>
          <tr><td>cut</td><td><b>cut</b></td></tr>
          <tr><td>hit</td><td><b>hit</b></td></tr>
          <tr><td>put</td><td><b>put</b></td></tr>
          <tr><td>read</td><td><b>read</b> (se escribe igual, ¡pero se pronuncia distinto!)</td></tr>
        </tbody>
      </table>

      <h3>Lote 2 — Pasado y participio iguales, acaban en "-t" 🟡</h3>
      <p>Solo hay que aprender UNA forma nueva (sirve para pasado y para participio a la vez).</p>
      <table>
        <thead><tr><th>Verbo</th><th>Pasado = Participio</th></tr></thead>
        <tbody>
          <tr><td>feel</td><td><b>felt</b></td></tr>
          <tr><td>keep</td><td><b>kept</b></td></tr>
          <tr><td>sleep</td><td><b>slept</b></td></tr>
          <tr><td>leave</td><td><b>left</b></td></tr>
        </tbody>
      </table>

      <h3>Lote 3 — Pasado y participio iguales, otras terminaciones 🟠</h3>
      <p>Mismo truco que el lote 2 (una sola forma nueva), solo que no acaban en "-t".</p>
      <table>
        <thead><tr><th>Verbo</th><th>Pasado = Participio</th></tr></thead>
        <tbody>
          <tr><td>say</td><td><b>said</b></td></tr>
          <tr><td>tell</td><td><b>told</b></td></tr>
          <tr><td>sit</td><td><b>sat</b></td></tr>
          <tr><td>win</td><td><b>won</b></td></tr>
        </tbody>
      </table>

      <h3>Lotes 4 y 5 — Tres formas distintas 🔴</h3>
      <p>Los más difíciles: el infinitivo, el pasado y el participio son <b>tres palabras diferentes</b>. Aquí no hay atajo — toca memorizar las tres, pero como ya dominas los otros lotes, solo quedan estos.</p>
      <table>
        <thead><tr><th>Verbo</th><th>Pasado</th><th>Participio</th></tr></thead>
        <tbody>
          <tr><td>go</td><td>went</td><td>gone/been</td></tr>
          <tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
          <tr><td>swim</td><td>swam</td><td>swum</td></tr>
        </tbody>
      </table>

      <p><b>Consejo:</b> haz los lotes en orden (1→5) — cada uno te prepara un poco para el siguiente.</p>
    `
  },
  {
    id: "haveGot",
    emoji: "🎒",
    title: "Have got",
    html: `
      <p><b>Have got</b> significa "tener" — se usa muchísimo en inglés británico (el de los exámenes Cambridge) para hablar de posesión, familia y cómo es alguien físicamente.</p>

      <table>
        <thead><tr><th>Sujeto</th><th>Afirmativa</th><th>Negativa</th></tr></thead>
        <tbody>
          <tr><td>I / you / we / they</td><td><b>have got</b></td><td>haven't got</td></tr>
          <tr><td>he / she / it</td><td><b>has got</b></td><td>hasn't got</td></tr>
        </tbody>
      </table>
      <p><i>I<b>'ve got</b> a new bike. She<b>'s got</b> blue eyes.</i> (en inglés hablado casi siempre se contrae: 've got, 's got)</p>

      <h3>Preguntas</h3>
      <table>
        <thead><tr><th></th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>you/we/they</td><td><b>Have</b> you got a pet?</td></tr>
          <tr><td>he/she/it</td><td><b>Has</b> she got a bike?</td></tr>
        </tbody>
      </table>

      <h3>Respuestas cortas — ¡sin "got"!</h3>
      <p>Este es el error más típico en el examen: en la respuesta corta <b>NO se repite "got"</b>.</p>
      <p><i>Have you got a dog? Yes, I <b>have</b>.</i> ✅ — <i>Yes, I have got.</i> ❌</p>
      <p><i>Has he got a car? No, he <b>hasn't</b>.</i> ✅</p>

      <h3>¿Para qué se usa?</h3>
      <ul>
        <li>Cosas que tienes: <i>I've got a new phone.</i></li>
        <li>Cómo es alguien físicamente: <i>She's got brown hair.</i></li>
        <li>Familia: <i>I've got two brothers.</i></li>
      </ul>

      <p><b>Truco para no liarte:</b> "got" nunca cambia — lo que cambia es have/has (afirmativa), haven't/hasn't (negativa) y Have/Has (pregunta). En la respuesta corta, "got" desaparece del todo.</p>
    `
  },
  {
    id: "toBe",
    emoji: "🧍",
    title: "El verbo to be (am / is / are)",
    html: `
      <p><b>To be</b> (ser/estar) es el verbo más básico — y el único que no usa "do/does" para preguntas o negativas. Tiene tres formas en presente: <b>am, is, are</b>.</p>

      <table>
        <thead><tr><th>Sujeto</th><th>Afirmativa</th><th>Negativa</th></tr></thead>
        <tbody>
          <tr><td>I</td><td><b>am</b> ('m)</td><td>am not ('m not)</td></tr>
          <tr><td>you / we / they</td><td><b>are</b> ('re)</td><td>aren't</td></tr>
          <tr><td>he / she / it</td><td><b>is</b> ('s)</td><td>isn't</td></tr>
        </tbody>
      </table>
      <p><i>I<b>'m</b> 13. She<b>'s</b> from Spain. They<b>'re</b> good friends.</i></p>

      <h3>Preguntas</h3>
      <p>Para preguntar, el verbo <b>to be</b> se pone al principio — sin "do/does", a diferencia de casi todos los demás verbos.</p>
      <table>
        <thead><tr><th></th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>I</td><td><b>Am</b> I right?</td></tr>
          <tr><td>you/we/they</td><td><b>Are</b> you ready?</td></tr>
          <tr><td>he/she/it</td><td><b>Is</b> he your brother?</td></tr>
        </tbody>
      </table>

      <h3>Respuestas cortas</h3>
      <p><i>Are you hungry? Yes, I <b>am</b>.</i> / <i>Is it raining? No, it <b>isn't</b>.</i></p>

      <h3>¿Para qué se usa?</h3>
      <ul>
        <li>Nacionalidad: <i>I'm Spanish.</i></li>
        <li>Edad: <i>She's 11.</i></li>
        <li>Profesión: <i>My mum is a teacher.</i></li>
        <li>Sentimientos: <i>Are you happy?</i></li>
        <li>La hora: <i>It's 9 o'clock.</i></li>
        <li>Dónde están las cosas: <i>The books are on the table.</i></li>
      </ul>

      <p><b>Truco para no liarte:</b> si la frase habla de cómo ES o ESTÁ algo/alguien (no de una acción), casi seguro que necesitas "to be" — y nunca "do/does" a su lado.</p>
    `
  },
  {
    id: "countableUncountable",
    emoji: "🍚",
    title: "Contables, incontables y some/any",
    html: `
      <p>En inglés, los nombres se dividen en dos tipos — y eso cambia cómo los usas.</p>

      <table>
        <thead><tr><th></th><th>Contables</th><th>Incontables</th></tr></thead>
        <tbody>
          <tr><td>¿Qué son?</td><td>Cosas que se pueden contar</td><td>Cosas que no se pueden contar</td></tr>
          <tr><td>Ejemplos</td><td>an apple, two apples, a friend</td><td>water, milk, rice, money</td></tr>
          <tr><td>¿Plural?</td><td>Sí: one apple → two apple<b>s</b></td><td>No existe plural: ~~waters~~, ~~informations~~</td></tr>
          <tr><td>¿a/an o número?</td><td>Sí: <i>a</i> school, <i>three</i> students</td><td>No: <i>I like water</i> (nunca "a water")</td></tr>
        </tbody>
      </table>

      <h3>Plural de los contables</h3>
      <table>
        <thead><tr><th>Regla</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>La mayoría: + <b>-s</b></td><td>student → students</td></tr>
          <tr><td>Acaba en -s, -ch, -sh, -x: + <b>-es</b></td><td>bus → buses, match → matches</td></tr>
          <tr><td>Acaba en -f/-fe: cambia a <b>-ves</b></td><td>knife → knives, wife → wives</td></tr>
          <tr><td>Consonante + -y: cambia a <b>-ies</b></td><td>family → families</td></tr>
          <tr><td>Irregulares</td><td>child → children, man → men, woman → women, person → people</td></tr>
        </tbody>
      </table>

      <h3>some y any</h3>
      <table>
        <thead><tr><th>Se usa...</th><th>Con</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td><b>some</b></td><td>afirmativas (contables plural o incontables) y ofertas/peticiones</td><td><i>I've got <b>some</b> apples. Would you like <b>some</b> coffee?</i></td></tr>
          <tr><td><b>any</b></td><td>negativas y preguntas (contables plural o incontables)</td><td><i>We haven't got <b>any</b> milk. Have you got <b>any</b> questions?</i></td></tr>
        </tbody>
      </table>

      <p><b>Truco para no liarte:</b> con un incontable, nunca "a/an" (❌ <i>a water</i>, ❌ <i>a rice</i>). Para una unidad concreta de algo incontable que se cuenta en otra palabra: <i>a glass of water, a bowl of rice</i>.</p>
    `
  },
  {
    id: "quantifiers",
    emoji: "📏",
    title: "How much / how many, a few / a little / a lot of",
    html: `
      <p>Para preguntar "¿cuánto/a?" y para decir cantidades, el inglés usa palabras distintas según si el nombre es contable o incontable (ver el tema anterior).</p>

      <h3>Preguntar cantidad</h3>
      <table>
        <thead><tr><th></th><th>Se usa con</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td><b>How many</b></td><td>contables (plural)</td><td><i><b>How many</b> eggs do you need?</i></td></tr>
          <tr><td><b>How much</b></td><td>incontables</td><td><i><b>How much</b> milk do you need?</i></td></tr>
        </tbody>
      </table>

      <h3>Decir cantidades</h3>
      <table>
        <thead><tr><th></th><th>Se usa con</th><th>Significa</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td><b>a few</b></td><td>contables</td><td>pocos/as</td><td><i>I need <b>a few</b> eggs — just three.</i></td></tr>
          <tr><td><b>a little</b></td><td>incontables</td><td>poco/a</td><td><i>Add <b>a little</b> salt.</i></td></tr>
          <tr><td><b>a lot of</b></td><td>los dos</td><td>mucho/a/os/as</td><td><i>She's got <b>a lot of</b> friends. He drinks <b>a lot of</b> water.</i></td></tr>
        </tbody>
      </table>

      <p><b>Truco para no liarte:</b> <i>many</i> va con cosas que se pueden contar (como "muchos/as" en plural); <i>much</i> va con lo que no se cuenta. Si dudas, piensa si podrías decir "two" delante de la palabra — si sí, es contable (many/a few); si no, es incontable (much/a little).</p>
    `
  },
  {
    id: "presentSimpleContinuous",
    emoji: "🔀",
    title: "Present simple vs. Present continuous",
    html: `
      <p>Ya conoces los dos por separado — lo que hay que aprender ahora es <b>cuándo usar cada uno</b>, porque los dos existen a la vez y a veces se confunden.</p>

      <h3>Present continuous — ahora mismo</h3>
      <p>Para cosas que están pasando en este momento, mientras hablas.</p>
      <p><i>We<b>'re watching</b> television at the moment.</i> · <i>Listen! Olivia <b>is playing</b> the guitar.</i></p>

      <h3>Present simple — cosas habituales</h3>
      <p>Para cosas que haces regularmente, no solo ahora.</p>
      <p><i>I <b>usually watch</b> television in the evening.</i> · <i>I <b>walk</b> to school.</i></p>

      <h3>Verbos de estado — nunca van en continuo ⚠️</h3>
      <p>Hay un grupo de verbos que describen <b>estados</b> (cosas que no cambian de un momento a otro), no acciones. Estos verbos casi nunca se usan en present continuous, aunque estés hablando de "ahora":</p>
      <table>
        <thead><tr><th colspan="7">be, like, hate, have, want, love, know, understand</th></tr></thead>
      </table>
      <p><i>I <b>understand</b> German and Spanish.</i> ✅ — <s>I am understanding German and Spanish.</s> ❌</p>
      <p><i>I <b>like</b> tea but I <b>hate</b> coffee.</i> · <i>I <b>have</b> three brothers, and I <b>love</b> them all.</i></p>

      <h3>El caso especial de "have"</h3>
      <p><b>Have</b> es un verbo de estado cuando habla de algo que no cambia (posesión, familia) — ahí nunca va en continuo:</p>
      <p><i>I <b>have</b> two brothers.</i> (no "I am having two brothers")</p>
      <p>Pero <b>have</b> también puede ser una acción (desayunar, ducharse...) — ahí SÍ puede ir en continuo:</p>
      <p><i>We<b>'re having</b> breakfast.</i> · <i>He<b>'s having</b> a wash.</i></p>

      <p><b>Truco para no liarte:</b> antes de usar "-ing", pregúntate si el verbo describe algo que cambia ahora mismo (acción) o algo que simplemente ES así (estado). Si es un verbo de estado de la lista de arriba, casi seguro que necesitas el present simple.</p>
    `
  },
  {
    id: "tooEnough",
    emoji: "⚖️",
    title: "too y enough",
    html: `
      <p><b>Too</b> y <b>enough</b> se usan con adjetivos para hablar de cantidad — pero van en <b>orden contrario</b>, y ese es el error más típico de examen.</p>

      <h3>too + adjetivo — "demasiado"</h3>
      <p><b>Too</b> va ANTES del adjetivo. Significa "más de lo que hace falta" o "más de lo posible" — casi siempre algo negativo.</p>
      <p><i>This food is <b>too hot</b>.</i> (no me gusta, o no puedo comérmela)</p>
      <p><i>I'm not going swimming because the water is <b>too cold</b>.</i></p>

      <h3>adjetivo + enough — "suficientemente"</h3>
      <p><b>Enough</b> va DESPUÉS del adjetivo — justo al revés que "too". Con "not", significa "menos de lo que hace falta":</p>
      <p><i>I'm <b>not warm enough</b>.</i> (= tengo frío, quiero estar más caliente)</p>
      <p><i>This T-shirt is <b>not big enough</b> for me.</i></p>

      <h3>not enough + nombre</h3>
      <p>También se usa con un nombre detrás (contable en plural, o incontable):</p>
      <p><i>There <b>aren't enough drinks</b> for everyone.</i> · <i>We <b>don't have enough money</b> for a new car.</i></p>

      <p><b>Truco para no liarte — el orden es la trampa:</b></p>
      <p>✅ <i>I'm not warm enough.</i> — ❌ <s>I'm not enough warm.</s></p>
      <p>✅ <i>We don't have enough money.</i> — ❌ <s>We don't have money enough.</s></p>
      <p>Recuerda: <b>too</b> se "adelanta" al adjetivo, <b>enough</b> siempre va detrás (del adjetivo o del nombre).</p>
    `
  }
];
