<template>
<div class="res">
    
    <div class="card"> 
        <div class="card-body">
            <h5 class="card-title" style="color:white;">Rezerwacja</h5>
            <form @submit.prevent="onFormSubmit">
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.name" placeholder="Imię">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.phone" placeholder="Telefon">
                    </div> 
                </div><br>
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="email" class="form-control" v-model="res.email" placeholder="E-mail">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.time" placeholder="Godzina">
                    </div> 
                </div><br>
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="date" class="form-control" v-model="res.date" placeholder="Data">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.numberpeople" placeholder="Ilość osób">
                    </div><br>
                </div><br> 
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Wyślij</button>
                </div> 
            </form>
        </div>
    </div><br>

    <div class="card"> 
        <div class="card-body">
            <h5 class="card-title" style="color:white;">Rezerwacja</h5>
            <form @submit.prevent="onFormSubmit">
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.name" placeholder="Imię">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.phone" placeholder="Telefon">
                    </div> 
                </div><br>
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="email" class="form-control" v-model="res.email" placeholder="E-mail">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.time" placeholder="Godzina">
                    </div> 
                </div><br>
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="date" class="form-control" v-model="res.date" placeholder="Data">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="res.numberpeople" placeholder="Ilość osób">
                    </div><br>
                </div><br> 
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Wyślij</button>
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
                res: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('reservation').add(this.res).then(() => {
                    alert("Reservation successfully created!");
                    this.res.name = ''
                    this.res.phone = ''
                    this.res.email = ''
                    this.res.time = ''
                    this.res.date = ''
                    this.res.numberpeople = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

.card {
    width:50%;
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
    transform: translate(0%,30%);
    
}
.card-body{
    
    background-color: darkslategrey;
    border: 2px solid black;
    
}
</style>
