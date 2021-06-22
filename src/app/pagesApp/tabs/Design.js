import React, { setState} from 'react'

class Design extends React.Component{

    constructor(props){
        super(props)
        this.onFilechange = this.onFilechange.bind(this)
    }
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    state = {
        profileImg: 'data:image/png;base64,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',
        logo_file_id: ''
    }

    // Display Image on the broweser
     imageHendler = (event) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if (reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }
    
    onFilechange(e){
        this.setState({ logo_file_id: e.target.files[0]})
    }


    render(){
        const {values, handleChange} = this.props
        const { profileImg} = this.state

        return(
            <div className="pages">
                <div className="row">
                <div className="col-md-6">
                     <h1>Upload Your Logo</h1>
                     <p>We recommend a strong, simple icon in a single solid color for the best visual impact. Generally speaking, 
                        black or a strong contrast color for light mode, 
                        and white usually works best for dark mode.
                    </p>
                <div className="uploadimage">            
                    <i class="fa fa-pencil-alt"></i>
                <input class="browse-input1" name="logo_file_id" type="file"
                onChange={handleChange('logo_file_id')}
                defaultValue={values.logo_file_id} 
                />      
                <span class="lu2oe2-3 kryKBZ">Drag and drop here (or tap and browse) to add a logo to your GivingFlow.</span>
                </div>
                <br/>
                <p>Input color that we’ll make sure it looks good everywhere on your GivingFlow and email receipts</p>
                <div class="form-outline mb-4">
                    <label class="form-label jtmHyL" for="form4Example2">Input Color</label>
                    <input type="text" 
                    onChange={handleChange('color')}
                    defaultValue={values.color} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                </div>
                <button 
                    type="submit" 
                    onClick={this.continue} 
                    className="fqIstn">Continue
                </button>
            
            </div>


            <div className="col-md-6">
                <div className="img-holder">
                    <img src={profileImg} alt="" 
                     onChange={handleChange('logo_file_id')}
                     defaultValue={values.logo_file_id}
                      onChange={this.onChangelogo}  id="img" className="img"/>
                </div>
           </div>
          
        </div>
    </div>
        )
    }
}
export default Design;
