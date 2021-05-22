import React from 'react'

export const Review = ({ formData, navigation  }) => {
    const { go } = navigation;
    const {
        countryCd,
        address1,
        city,
        stateCd,
        zip,
        legalBusinessName,
        businessPhone,
        websiteAddress,
        ownerName,
        ownerEmail,
        ownerTitle,
        ownerMobilePhone,
        ownerDob,
        ownerSSN,
        bankAcctNum,
        bankRoutingNum,
    } = formData

        return (
        <div className="pages">
            <RenderAccordion summary="Location" go={go} details={[
                {'Country': countryCd },
                {'address': address1},
                {'city': city},
                {'state': stateCd},
                {'zip': zip}
                ]}
            />
            <RenderAccordion summary="Business" go={go} details={[
                {'Legal Business Name': legalBusinessName },
                {'Business Phone': businessPhone},
                {'Website Address':  websiteAddress}
                ]}
            />
            <RenderAccordion summary="Representative" go={go} details={[
                {'Owner Church Name': ownerName },
                {'Owner Email': ownerEmail},
                {'Title': ownerTitle},
                {'Mobile Phone': ownerMobilePhone},
                {'Date of Birth': ownerDob}
                ]}
            />
            <RenderAccordion summary="Bank" go={go} details={[
            
                {'soucial securty Number': ownerSSN },
                {'Bank Account': bankAcctNum},
                {'Routing Number': bankRoutingNum}
                ]}
            />
            <br/>
             <center>
             <button type="button" class="btn btn-primary">Submit</button>
             </center>
                
            
        </div>

    )
}

export const RenderAccordion = ({ summary, details, go }) =>(
    <div class="container-fluid bg-gray" id="accordion-style-1">
        <div class="container">
            <section>
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <i class="fa fa-amazon main"></i><i class="fa fa-angle-double-right mr-3"></i>View summaries
                                </button>
                              </h5>
                                </div>
    
                                <div id="collapseOne" class="collapse show fade" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        { details.map((data, index)=>{
                                            const objkey = Object.keys(data)[0];
                                            const objvalue = data[Object.keys(data)[0]];

                                            return<li key={index}> {`${objkey}: ${objvalue}`}</li>
                                     
                                        })}
                                        <i class="fas fa-pencil-alt" onClick={() => go(`${summary.toLowerCase()}`)}>
                                            
                                        </i>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>	
                    
                </div>
            </section>
        </div>
    </div>
   
)
