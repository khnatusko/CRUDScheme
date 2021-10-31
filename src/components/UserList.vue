<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dish in Dishes" :key="dish.key">
                        <td>{{ dish.name }}</td>
                        <td>{{ dish.description }}</td>
                        <td> {{dish.price | formatPrice }}</td>
                        <td>
                            <router-link :to="{name: 'Edit', params: { id: dish.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(dish.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase';
    
    export default {
        data() {
            return {
                Dishes: []
            }
        },
        created() {
            db.collection('dishes').onSnapshot((snapshotChange) => {
                this.Dishes = [];
                snapshotChange.forEach((doc) => {
                    this.Dishes.push({
                        key: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        price: doc.data().price
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("dishes").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        },
        filters: {
            formatPrice: function(price) {
			
				var waluta = new Intl.NumberFormat('PL', {
				style: 'currency',
				currency: 'PLN',
				});
				return waluta.format(price);
        }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
    td{
        background-color: white;
    }
</style>