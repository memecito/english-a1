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
  }
];
