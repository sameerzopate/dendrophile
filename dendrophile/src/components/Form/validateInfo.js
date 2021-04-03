export default function validateInfo(values){
    let errors={}
    //companyname
        if(!values.companyname.trim())
        {
            errors.companyname="Company name required!"
        }
        //name
        if(!values.name.trim())
        {
            errors.name="Name required!"
        }
        //email
        if (!values.email) {
            errors.email = 'Email required!';
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid!';
          }

          //contact
          if (!values.contact) {
            errors.contact = 'Enter a valid number';
          } else if (values.contact.length < 10) {
            errors.contact = 'contact number needs to be 10 characters or more';
          }
          return errors;
    }
