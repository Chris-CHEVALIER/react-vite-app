export default function Button () {
  const handleClick = () => {
    console.log('Clic !')
  }

  return <button onClick={handleClick}>Cliquez-moi !</button>
}
