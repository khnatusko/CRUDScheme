<template>
<div class="container py-2">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Dish</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="dish.name" required>
                </div><br>

                <div class="form-group">
                    <label>Kategorie</label>
                    <b-form-select v-model="dish.category" :options="options" style="width:100%"></b-form-select>
                        <div class="mt-3">Wybrana kategoria: <strong>{{ dish.category }}</strong></div>
                </div>
                

                <div class="form-group">
                    <label>Price</label>                   
                    <input type="number" class="form-control" v-model="dish.price" min="1" required>                    
                </div><br>

                <div class="form-group py-2">
                    <button class="btn btn-primary btn-block">Add Dish</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    import { db } from '../firebase';

    export default {
        data() {
            return {
                dish: {
                },
                options: [
                    {value: null, text: 'Please select an option' },
                    {value: 'Napoje', text: 'Napoje'},
                    {value: 'Danie główne', text: 'Danie główne'}
                ]
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('dishes').add(this.dish).then(() => {
                    alert("User successfully created!");
                    this.dish.name = ''
                    this.dish.category = ''
                    this.dish.price = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
       
    }
</script>
<style>
body{
  background-image: url("https://kociakawiarniakrakow.pl/img/slide-01.jpg");
    width: 100%;
    height: 0vw;
    object-fit: cover;
}
.col-md-5{
    background-color: darkslategrey;
    border: 10px solid black;
    width: 50%;
    margin: 0 auto; 
    float: none; 
    color: white;
}
</style>