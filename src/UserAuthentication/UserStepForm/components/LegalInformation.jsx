import { useContext, useEffect, useState } from "react";
import nepalLocation from "./formState/nepalLocation.json"
import { FormContext } from "./formState/State";

const LegalInformation = () => {

    const {Userinformation,setUserInformation} = useContext(FormContext)
    
    const [district,SetDistrict] = useState([]);
    const [Prov,setProv] = useState('KOSHI PROVINCE');


    const [DisInput,setDisselect] = useState(district[0]);
    const [municipality,setMunicipilty] = useState([]);

   

    useEffect(() => {

        let districts = nepalLocation["provinceList"].filter((ele) => ele.name === Prov);
        
        if(districts[0].districtList) {
             SetDistrict(districts[0]?.districtList.map(e => e.name))
        } else SetDistrict(null);
        
        if(districts[0].districtList) {
            let muni = districts[0]?.districtList.filter(e => e?.name === DisInput);
            setMunicipilty(muni[0]?.municipalityList);
       } else setMunicipilty(null);
       
       setUserInformation(prevState => {
             return {...prevState,location :{...prevState.location,district:DisInput,prov:Prov}}
       })


    },[Prov,DisInput]);
    



    const updateMuni = (event) => {
        let id = event?.target?.options[event?.currentTarget?.options?.selectedIndex]?.getAttribute("idvalue");
        setUserInformation(prevState => {
            return {...prevState,location :{...prevState.location,municipality:event?.target.value,Locationid:id}}
      })
    }
    
  
    const onChangeProvince = async (event) => {
          setProv(event.target.value); 
    }

    const onChangeDistrict = (event) => {
         setDisselect(event.target.value);

    }

    const onChangeCitizenShip = event => {
         let formatedValue = formatCitizenshipNumber(event.target.value);
         setUserInformation(prevState => {
            return {...prevState,citizenshipValue:formatedValue}
      })
    }

    const onChangePhone = event => {
        setUserInformation(prevState => {
            return {...prevState,phonenumber:event.target.value}
      })
    }

    const onChangeAddress = event => {
        setUserInformation(prevState => {
            return {...prevState,location:{...prevState.location,Address:event.target.value}}
      })
      
    }


    const formatCitizenshipNumber = (value) => {
        // Remove non-numeric characters from the input
        const numericValue = value.replace(/[^0-9]/g, '');
    
        // Format the value with hyphens
        let formattedValue = '';
        for (let i = 0; i < numericValue.length; i++) {
          if (i === 2 || i === 4 || i === 6) {
            formattedValue += '-';
          }
          formattedValue += numericValue[i];
        }
        return formattedValue;
      };
 

     return (
        <div className="mt-6 pb-3">
            <div className="relative">
                <div className='grid grid-cols-2 gap-6 '>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your citizenship no</h1>
                        <input
                        type="text"
                        onChange={onChangeCitizenShip}
                        value={Userinformation.citizenshipValue}
                        maxLength={12}
                        id="email-address-icon"
                        class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                        placeholder="12-12-0081"
                      ></input>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your phone number</h1>
                        <input
                        value={Userinformation.phonenumber}
                        onChange={onChangePhone}
                        type="tel"
                        id="email-address-icon"
                        class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                        placeholder="+977-2818182"
                      ></input>
                    </div>
                </div>
            </div>


            <div className="relative pt-5">
                <div className='grid grid-cols-2 gap-6 '>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your province</h1>
                        <select id="provinces"  onChange={onChangeProvince} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option  value="KOSHI PROVINCE">Province No. 1</option>
                            <option  value="MADHESH PROVINCE">Province No. 2</option>
                            <option  value="BAGMATI PROVINCE">Province No. 3</option>
                            <option  value="GANDAKI PROVINCE">Gandaki Pradesh</option>
                            <option  value="LUMBINI PROVINCE">Province No. 5</option>
                            <option  value="KARNALI PROVINCE">Karnali Pradesh</option>
                            <option  value="SUDUR PASHCHIMANCHAL PROVINCE">Sudurpashchim Pradesh</option>
                        </select>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your District</h1>
                        <select  onChange={onChangeDistrict} disabled={!district ? true : false} id="districts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                district?.map((i,key) => {
                                    return (
                                        <option selected={Userinformation.location.district=== i.name} value={i} key={key}>{i}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className="relative pt-5">
                <div className='grid grid-cols-2 gap-6 '>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your municipality</h1>
                        <select  onChange={updateMuni}  disabled={!municipality? true : false} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         {
                               municipality ? municipality?.map((i,key) => {
                                    return (
                                        <option selected={Userinformation.location.municipality === i.name} value={i.name} idValue={i.id} key={i.id}>{i.name}</option>
                                    )
                                }) : null
                            } 
                        </select>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Address</h1>
                        <input
                        value={Userinformation.location.Address}
                        onChange={onChangeAddress}
                        type="text"
                        id="email-address-icon"
                        class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                        placeholder="Ward 02, Manbhwan"
                      ></input>
                    </div>
                </div>
            </div>



        </div>
     )
} 

export default LegalInformation;