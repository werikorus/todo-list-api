import { useStyles } from './AvatarProfileStyles';
import userImg from './../../assets/default-user-image.png';

const AvatarProfile = (props) =>{
  const { setSrcImg } = props;
  const classes = useStyles();
  const handleUpload = (event) =>{
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if(file){
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        const img = document.querySelector('#picture__image');
        img.src = readerTarget.result;
        setSrcImg({ Image: reader.result });         
      });

      reader.readAsDataURL(file);              
    }
  };

  return(
    <div>
      <label className={classes.picture} for="picture__input" tabIndex="0">        
        <img className={classes.picture} src={userImg} alt="" id='picture__image'/>        
      </label>

      <input 
        type="file" 
        className={classes.input}
        id="picture__input"
        onChange={(event) => handleUpload(event)}
      >        
      </input>
    </div>
  );
}

export default AvatarProfile