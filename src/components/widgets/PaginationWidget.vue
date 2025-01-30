<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
 
const props = defineProps({
  totalItems: {
    type: Number,
    required: true,  
  },
  itemsPerPage: {
    type: Number,
    default: 10,  
  },
});

 
const emit = defineEmits(["page-change"]);

const currentPage = ref(1);

 
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const startItem = computed(() => (currentPage.value - 1) * props.itemsPerPage + 1);
const endItem = computed(() => Math.min(currentPage.value * props.itemsPerPage, props.totalItems));

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    emit("page-change", page);
  }
};
</script>

<template>
  <div class="pagination-container">
   
    <p class="pagination-info">
      Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} results
    </p>
 
    <div class="pagination-buttons">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
        Prev
      </button>
      
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>

      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.pagination-info {
  font-size: 14px;
  margin-bottom: 10px;
}

.pagination-buttons {
  display: flex;
  gap: 5px;
}

button {
  padding: 5px 10px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button.active {
  background: #0056b3;
  font-weight: bold;
}
</style>
