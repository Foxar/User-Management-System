//style.js
const style = {
  app: {
    backgroundColor: 'rgb(230,230,230)',
    width: '60%',
    padding: '0 15px',
    position: 'absolute',
    margin: '15vh 20%',
    borderRadius: '5px',
  },
  commentBox: {
    width:'80vw',
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif'
  },
  userListBox: {
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif',
    width: '60%',
    borderRadius: '10px',
    padding: '0'
  },
  title: {
    textAlign:'center',
    textTransform:'uppercase'
  },
  banner: {
    backgroundColor: '#0069c0',
    textAlign:'right',
    textTransform:'uppercase',
    fontFamily:'Helvetica, sans-serif',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: '7vh',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    marginBottom: '50px'
  },
  List: {
    border:'1px solid #f1f1f1',
    borderRadius: '15px',
    padding:'0 12px',
    maxHeight:'70vh',
    overflowY:'scroll',
    listStyleType: 'none',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px #555',
    marginBottom: '10vw'
  },
  FormBox: {
    border:'1px solid #f1f1f1',
    borderRadius: '15px',
    padding:'25px 12px',
    listStyleType: 'none',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px #555',
  },
  user: {
    backgroundColor:'#fafafa',
    margin:'10px',
    padding:'3px 10px',
    fontSize:'.85rem',
    position: 'relative'
  },
  footer: {
    fontFamily:'Helvetica, sans-serif',
    borderTop: '1px solid #999',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.7em',
    marginTop: '5vh',
  },
  userListTitle: {
    textAlign: 'center',
    verticalAlign: 'top'
  },
  userTitle: {
    display: 'inline'
  },
  Form: {
    marginLeft: '50px',
    display:'flex',
    width: '5vw',
    flexFlow:'row wrap',
    justifyContent:'space-between',
  },
  FormAuthor: {
    minWidth:'150px',
    margin:'3px',
    padding:'0 10px',
    borderRadius:'3px',
    height:'40px',
    flex:'2'
  },
  FormText: {
    flex:'100%',
    minWidth:'400px',
    margin:'3px',
    padding:'0 10px',
    height:'40px',
    borderRadius:'3px',
    display: 'flex'
  },
  FormUsergroup: {
    flex:'100%',
    minWidth:'400px',
    margin:'3px',
    padding:'0 10px',
    height:'40px',
    borderRadius:'3px',
    display: 'flex'
  },
  FormUsergroupButton: {
    float: 'right',
    right: '0',
    minWidth: '40px',
    minHeight: '40px',
    padding: '0',
    margin: '0'
  },
  FormPost: {
    minWidth:'75px',
    flex:'1',
    height:'40px',
    margin:'5px 3px',
    fontSize:'1rem',
    backgroundColor:'#6ec6ff',
    borderRadius:'3px',
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:'.055rem',
    border:'none',
    transition: 'background-color 0.55s'
  },
  updateLink: {
    textDecoration:'none',
    fontSize:'.7rem',
    width:'4vw',
    height:'25px',
    position:'absolute',
    padding:'0',
    lineHeight:'25px',
    top:'25px',
    right:'0',
    textDecoration:'none',
    verticalAlign: 'middle',
    backgroundColor: '#2196f3'
  },
  deleteLink: {
    width:'4vw',
    height:'25px',
    position:'absolute',
    padding:'0',
    lineHeight:'25px',
    top:'0',
    right:'0',
    textDecoration:'none',
    fontSize:'.7rem',
    backgroundColor: '#ff5722'
  },
  deleteLinkUsergroup: {
    width:'1vw',
    height:'1vw',
    position:'absolute',
    padding:'0',
    lineHeight:'1vw',
    top:'0',
    right:'0',
    border:'solid black 1px',
    textDecoration:'none',
    fontSize:'.3rem',
    color:'red',
    fontSize: 'bold'
  },
  ul: {
    listStyleType: 'none',
  }
}

module.exports = style;
