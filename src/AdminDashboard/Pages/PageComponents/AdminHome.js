import { BsFillPersonVcardFill } from 'react-icons/bs';
import { RiMedicineBottleFill } from 'react-icons/ri';
import { MdVaccines } from 'react-icons/md'
import Map from './Map';

const AdminHome = () => {
    return (

        <div className="w-full h-screen bg-metal mx-auto grid lg:grid-cols-2 lg:grid-flow-col gap-2 md:grid-col-1">
            <div className="h-fit overflow-hidden lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> Demographic visualization
                </div>
                <div className="relative grid grid-cols-1 pl-7 pr-5 overflow-scroll">
                      <Map/>
                </div>
            </div>
            <div className="w-[400px] h-[400px] rounded-sm  border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> General information
                </div>
                <div class="relative ">


                </div>
            </div>
        </div>

    )
}


export default AdminHome;