import { isValidMnemonic } from '@ethersproject/hdnode';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../hooks/useI18nContext';
import TextField from '../../ui/text-field';
import { clearClipboard } from '../../../helpers/utils/util';
import { BannerAlert, Text } from '../../component-library';
import Dropdown from '../../ui/dropdown';
import ShowHideToggle from '../../ui/show-hide-toggle';
import {
  TextAlign,
  TextVariant,
  Severity,
} from '../../../helpers/constants/design-system';
import { parseSecretRecoveryPhrase } from './parse-secret-recovery-phrase';

const defaultNumberOfWords = 12;

const hasUpperCase = (str) => str !== str.toLowerCase();

export default function SrpInput({ onChange, srpText }) {
  const [srpError, setSrpError] = useState('');
  const [pasteFailed, setPasteFailed] = useState(false);
  const [draftSrp, setDraftSrp] = useState(Array(defaultNumberOfWords).fill(''));
  const [showSrp, setShowSrp] = useState(Array(defaultNumberOfWords).fill(false));
  const [numberOfWords, setNumberOfWords] = useState(defaultNumberOfWords);

  const t = useI18nContext();

  const onSrpChange = useCallback(
    (newDraft) => {
      let errorMsg = '';
      const joinedPhrase = newDraft.join(' ').trim();

      if (newDraft.some((w) => w !== '')) {
        if (newDraft.some((w) => w === '')) errorMsg = t('seedPhraseReq');
        else if (hasUpperCase(joinedPhrase)) errorMsg = t('invalidSeedPhraseCaseSensitive');
        else if (!isValidMnemonic(joinedPhrase)) errorMsg = t('invalidSeedPhrase');
      }

      setDraftSrp(newDraft);
      setSrpError(errorMsg);
      onChange(errorMsg ? '' : joinedPhrase);
    },
    [t, onChange],
  );

  const toggleShowSrpWord = useCallback((idx) => {
    setShowSrp((curr) =>
      curr.map((val, i) => i === idx ? !val : false)
    );
  }, []);

  const onWordChange = useCallback(
    (idx, word) => {
      if(pasteFailed) setPasteFailed(false);
      const newDraftArr= [...draftSrp];
      newDraftArr[idx] = word.trim();
      onSrpChange(newDraftArr);
    },
    [draftSrp,onSrpChange,pasteFailed],
  );

  
  	const adjustWordCountAndFillEmpty=useCallback(
  	(wordsArray,count)=>{
  		let adjustedCount=count;
  		if(count <12){
  			adjustedCount=12;
  		}else if(count %3 !==0){
  			adjustedCount=count+(3-(count %3));
  		}
  		const filledArray=[
  			...wordsArray.slice(0,count),
  			...Array(adjustedCount - count).fill('')
  		];
  
 		return{filledArray:filledArray,newCount:adjustedCount};
  	},[]
  	
  	
  	
  
 );
  




	

 

   

  
  
  

 


  




  


 


 

  


	

	

	
	

	
	

	


 
	
	
	
	
	
	
	
	
	
	

	


  

  

  

  

  

   

  
  
 

  

 





   

  


 



 

  

 
 
  
 

 

 

 

 

 

 
  

 





 




 


  


  


  
  
  
 
   
   
   
   
  
 
  
  
  
  
 
 
 
  
 
  
 
  
 
 
 
  

 
   
    
     
     
    

    
    
    

    
    


 
  

  

  

  

  

  

  

 

  

 



  




 

  






 















 


const onPasteHandler=useCallback(
(rawSrP)=>{

let parsed=parseSecretRecoveryPhrase(rawSrP);

let words=parsed.split(" ");

if(words.length>24){
setPasteFailed(true);

return;

}

if(pasteFailed)setPasteFailed(false);

const{filledArray:newFilled,newCount:newNum}=adjustWordCountAndFillEmpty(words ,words.length);


setNumberOfWords(newNum);

setShowSrp(Array(newNum).fill(false));

onSrpChange(newFilled);

clearClipboard();


},
[numberOfWords,onSrPchange,pastefailed,setpastefailed]



);



const numberOptions=[];

for(let i=12;i<=24;i+=3){

numberOptions.push({name:t("srpInputNumberofwords",[`${i}`]),value:`${i}`});

}

const handleDropdownChange=usecallback(

(selectedOption)=>{

let num=parseInt(selectedOption ,10)

if(Number.isNaN(num))throw new Error("Unable to parse option as integer");

let sliced=draftSrP.slice(0,num)

if(sliced.length<num){

sliced=[...sliced,...array(num-sliced.length).fill("")];

}

setnumberofwords(num);

setshowsRp(array(num).filse(false));

onSRPchange(slicED);



},

[draftSRP,onSRPchange]





)




return(

<div className="Import-srpr__container">

<div className="Import-SRP__dropdown-container">

<label className="Import-SRP__srp-label">{srptxt&&<text align={TextAlign.Left} variant={TextVariant.headingSm} as="h4">{srptxt}</text>}</label>

<BannerAlert className="Imports-rp__paste-tip" severity={Severity.info} description={t("srppastetip")} descriptionprops={{className:"imports-rp-banner-alert-text"}} />

<Dropdown classname="imports-rpp-number-of-words-dropdown" onchange={handleDropdownchange} options={numberoptions} selectedoption={`${numberofwords}`} />

</div>

<div className="imports-RPP-SRP">

{[...array(numberofwordz)].map(index=>{

const id=`imports-rpp-srpr-word-${index}`;

return(

<div key={index} className='imports-prr_srr_word'>

<label htmlFor=id className='Imports_srpr_word_label'><text>{`${index+1}.`}</text></label>

<TextField id=id data-testid=id type=(showSRPh[index]? "TEXT": "PASSWORD") onchange={(e)=>{e.preventdefault();onwordchange(index,e.target.value)}} value=draftsRp[index]} autocomplete='off' onpaste={(event)=>{

let clipdata=event.clipboarddata.getdata("TEXT");

if(clipdata.trim().match(/\s/u)){event.preventdefault();onpasthandler(clipdata);}}}/>

<showhidetoggle id={`${id}-checkbox`} arialabelhidden=t('sprwordhidden') arialabelshown=t('sprwordshown') shown=showsRph[index] data-testid={`${id}-checkbox`} onchange={()=>toggleshowsprword(index)} title=t(`spurtoggleshow`)/>


</div>
)


})}


</div>


{sRperror?(

<banneralert classname='Imports-Prer_SPR_error' severity={Severity.danger} description=sRperror descriptionprops={{classname:'Imports-SPRR-Banner_alert_text'}}/>

):null}

{pastfailed?(

<banneralert classname='Import-SPRR-to-many-Words_error' severity={Severity.Danger} actionbuttonlabel=t(`dismiss`) actionbuttononclick={()=>SetPastFail(False)} Description=T(`Spr-Paste-failed-too-many-words`) DescriptionProps={{classname:'Imports-SPRR-Banner-alert-text'}}/>

):null}





</div>




)



}




SprInput.propTypes={
OnChnage:PropTypes.func.isrequired,
SprTxt:PropTypes.string.isRequired,

};
