import { getProfile } from '../api/userApi'
import Button from './button'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const handleSubmit = async() => {
    const response = await getProfile()
    if(response.data.role === "CLIENT"){
      navigate("/clientProfile")
    }else{
      navigate("/freelancerProfile")
    }
  }
  return (
    <div className='w-full'>
      <div className='h-20 bg-slate-300 shadow-2xl text-center'>
        {}
        <Button
        onClick={handleSubmit}
        className='text-gray-950 text-2xl font-bold p-4'
        text='Profile'
        />
      </div>
    </div>
  )
}

export default Header
