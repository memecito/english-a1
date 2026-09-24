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
  }
];
