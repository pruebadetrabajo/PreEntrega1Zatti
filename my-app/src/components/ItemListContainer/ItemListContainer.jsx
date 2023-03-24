
const ItemListContainer = (props) => {
    return (
      <div style={styles.container}>
        <h3> {props.saludo}</h3>
      </div>
    );
  }

  const styles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px #888888',
    }
}

  export default ItemListContainer;