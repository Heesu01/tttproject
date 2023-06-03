<template>
    <div class="add-board">
    <Modal>
      <div slot="header">
        <h2>
          게시글 작성
          <a href="" class="modal-default-button" @click.prevent="close">&times;</a>
        </h2>
      </div>
      <div slot="body">
        <form id="add-board-form" @submit.prevent="addBoard">
         <div>
          <div>
          <label id="title" for="title">제목</label>
          <input type="text" id="title" v-model="input" ref="title" required>
        </div>
        <div>
          <label id="content" for="content">내용</label>
          <textarea id="content" v-model="content" rows="15" required></textarea>
        </div>
      </div> 
        </form>
      </div>
      <div slot="footer">
          <button class="btn" :class="{'btn-success': valid}" type="submit" 
          form="add-board-form" :disabled="!valid" id="submit">작성</button>
        
        </div>
      
    </Modal>
  </div>
  </template>
  
  <script>
  //import {mapMutations, mapActions} from 'vuex'
  import Modal from './Modal.vue'
  
  export default {
    components: {
      Modal
    },
    data() {
      return {
        input: '',
        content: '',
        valid: false
      }
    },
    watch: {
      input(v) {//input부분 감시하고있다가 length > 0일때 vaild값 true로바꿔줌
        this.valid = v.trim().length > 0
      }
    },
    mounted() {
      this.$refs.title.focus(); //상위에서 mount됐을때 focus를 입력필드로 옮김
    },
    methods: {
      close() { //창닫기
        this.$emit('close')
      },
      addBoard() {
        this.$emit('close')
        this.$emit('submit', { title: this.input, content: this.content })
        }
    }
  }
  </script>
  
  <style>
.add-board {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

form {
    background-color: #fff;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 0 10px rgb(0, 56, 120);
}
h1 {
    text-align: center;
    margin-top: 0;
}
label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}
input[type="text"], textarea {
    display: block;
    width: 180%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
}
input[type="submit"] {
    background-color: rgb(4,122,255);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    
}

input[type="submit"]:hover {
    background-color: rgb(0, 56, 120);
}
</style>