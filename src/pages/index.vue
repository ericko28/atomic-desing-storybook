<template>
  <Container>
    <Card max-width="400px">
      <template #head>
        <CardHeader />
      </template>
      <template #body>
        <div class="mt-4">
          <CardBody />
        </div>
      </template>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import Card from '@/components/atoms/Card.vue'
import Container from '@/components/atoms/Container.vue'
import CardHeader from '@/components/molecules/CardHeader.vue'
import CardBody from '@/components/molecules/CardBody.vue'
</script>
