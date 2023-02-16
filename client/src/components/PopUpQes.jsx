export default function PopUpQes({ handlPopUp, deletePost }) {
  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '1rem',
    border: '1px solid #444',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px #555',
    textAlign: 'center',
    width: '20rem',
  };
  const buttonStyle = {
    margin: '10px',
    padding: '8px 15px',
    background: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  };
  return (
    <div>
      <div style={popupStyle}>
        <p>Are you sure you want to delete?</p>
        <button style={buttonStyle} onClick={() => deletePost()}>
          Yes
        </button>
        <button style={buttonStyle} onClick={() => handlPopUp(false)}>
          No
        </button>
      </div>
    </div>
  );
}
