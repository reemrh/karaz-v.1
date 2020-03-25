import React from 'react'
import ReactDOM from 'react-dom'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'


export default class App extends React.Component {
  state = {
    src: null,
    fileName: '',
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80,
    },
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () =>
          this.setState({
            src: reader.result,
          }),

        false
      )
      
      this.setState({
       fileName: e.target.files[0]['name']
      })

      reader.readAsDataURL(e.target.files[0])
    }
  }

  onImageLoaded = image => {
    console.log('onCropComplete', image)
  }

  onCropComplete = async crop => {
    const croppedImg = await getCroppedImg(this.state.src,this.state.crop, this.state.fileName);
   
    console.log('onCropComplete', crop)
    console.log(croppedImg)
  }

  onCropChange = crop => {
    this.setState({ crop })
  }
 
  render() {
      
    return (
      <div className="App">
        <div>
          <input type="file" onChange={this.onSelectFile} />
        </div>
        {this.state.src && (
          <ReactCrop
            src={this.state.src}
            crop={this.state.crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        <img src={this.state.src} crop={this.state.crop}/>
       
 
      </div>
    )
  }
}

function getCroppedImg(image, pixelCrop, fileName) {
 
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
   
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
   
    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');
   
    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(file => {
        file.name = fileName;
        resolve(file);
      }, 'image/jpeg');
    });
  }
