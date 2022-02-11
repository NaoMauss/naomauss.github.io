import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {

    const { register, handleSubmit } = useForm();

    let result = []

    const onSubmit = (data) => {
        result.push(data.nameVid);
        result.push(data.descVid);
        result.push(data.linkVid);
        result.push(data.catVid);
        result.push(data.idVid);        
        console.log(result)

        axios.post('/postApi',{
            "id" : result
        })

        result = []

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Entrez le nom de la vidéo' name="nameVid" {...register("nameVid", { required: "Required", })}/><br/>
            <input type="text" placeholder='Entrez id de la vidéo' name="idVid" {...register("idVid", { required: "Required", })}/><br/>
            <input type="text" placeholder='Entrez la description de la vidéo' name="descVid" {...register("descVid", { required: "Required", })}/><br/>
            <input type="text" placeholder='Entrez le lien de la vidéo' name="linkVid" {...register("linkVid", { required: "Required", })}/><br/>
            <input type="text" placeholder='Entrez la catégorie de la vidéo' name="catVid" {...register("catVid", { required: "Required", })}/><br/>
            <input type="submit"/>
        </form>
    );
};

export default Form;

/*<div>
            
        </div>*/