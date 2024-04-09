// Dans le composant "Welcome.jsx", enfant de "Home"

export default function Welcome (props) {
  return (
    <div>
      <h1>Bonjour {props.name} !</h1>
      <h2>Bienvenue sur la page {props.page}</h2>
      {/* Ici, on récupère et affiche les valeurs des props 'name' et 'page' */}
    </div>
  )
}
