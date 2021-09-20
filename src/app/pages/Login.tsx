import { useForm } from 'react-hook-form'
import { TokenUser, UserLogin } from './../models'
import {loginPost} from './../services/UserService'
import { withRouter } from 'react-router-dom'


function Login(props:any) {
   const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>();

   const save = async(data: UserLogin) => {
      await loginPost(data).then(
         res=>{
            console.log(res)
            let userToken:TokenUser = res.data
            sessionStorage.setItem('user_token', JSON.stringify(userToken))
            props.history.push('/inicio')
         }
      )
      .catch(error=>{
         alert(error?.response?.data?.detail);
      })
   }
   return (
      <div className="container-login">
         <form  onSubmit={handleSubmit(save)} className="form-login">
            <h2 className="text-center text-white">Iniciar Session</h2>
            <br />
            <div className="form-group">
               <input type="text" {...register("email",{
                  required: 'Este campo es obligatorio',
                  maxLength:{
                     message:'Maximo 100 caracteres',
                     value:100
                  }
               })} className="form-control" placeholder="Email" />
               {errors?.email && <p className="text-danger text-sm">{errors.email.message}</p>}
            </div>
            <div className="form-group">
               <input type="password" {...register("password",{
                  required: 'Este campo es obligatorio',
                  maxLength:{
                     message:'Maximo 50 caracteres',
                     value:50
                  }
               })} 
                  className="form-control" placeholder="Contraseña" 
                  autoComplete="false"
                  />
               {errors?.password && <p className="text-danger text-sm">{errors.password.message}</p>}
            </div>
            <button type="submit" className="btn btn-success btn-block">Aceptar</button>
         </form>
      </div>

   )
}

export default withRouter(Login);
