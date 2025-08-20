<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from 'primevue'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  name: 'Login',
})

const { fetch: refreshSession } = useUserSession()

const toast = useToast()
const LoginSchema
  = z.object({
    email: z.email(),
    password: z.string(),
    rememberMe: z.boolean(),
  })

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(LoginSchema),
  initialValues: {
    rememberMe: false,
  },
})

const loading = ref(false)
const handleLogin = handleSubmit(async (values, { resetForm }) => {
  loading.value = true
  $fetch('/api/auth/login', {
    method: 'POST',
    body: values,
  })
    .then(async () => {
      toast.add({
        summary: 'Login Success',
        severity: 'success',
        life: 3000,
      })
      // Refresh the session on client-side and redirect to the home page
      await refreshSession()
      await navigateTo('/')
    })
    .catch(() => toast.add({
      summary: 'Bad credentials',
      detail: 'Please enter a valid email or password',
      severity: 'error',
      life: 3000,

    }))
    .finally(() => {
      loading.value = false
    })
})
</script>

<template>
  <div class="rounded-4xl p-[0.3rem] bg-gradient-to-b from-primary from-[10%] to-[rgba(33,150,243,0)] to-[30%] w-full md:w-[600px]">
    <Card class="w-full bg-surface-0 dark:bg-surface-900 p-10 rounded-4xl">
      <template #content>
        <div class="text-center mb-8">
          <Icon name="mingcute:android-2-fill" class="text-primary dark:text-surface-100" size="60" />
          <div class="text-surface-900 dark:text-surface-0 text-3xl font-bold mb-4">
            Welcome to PrimeLand!
          </div>
          <span class="text-muted-color font-medium">Sign in to continue</span>
        </div>

        <form class="flex flex-col gap-5" @submit.prevent="handleLogin">
          <Field v-slot="{ field, errorMessage }" as="div" name="email">
            <FormFieldWrapper id="email" label="Email" :error="errorMessage">
              <InputText id="email" v-bind="field" :invalid="!!errors.email" type="email" placeholder="Email address" fluid />
            </FormFieldWrapper>
          </Field>
          <Field v-slot="{ field, errorMessage }" as="div" name="password">
            <FormFieldWrapper id="password" label="Password" :error="errorMessage">
              <Password input-id="password" placeholder="Password" :toggle-mask="false" fluid :feedback="false" v-bind="field" />
            </FormFieldWrapper>
          </Field>

          <div class="flex items-center justify-between gap-8">
            <Field v-slot="{ field }" :value="true" :unchecked-value="false" type="checkbox" name="rememberMe" as="div">
              <FormFieldWrapper id="rememberme" class="flex items-center gap-2 flex-row-reverse !space-y-0" label="Remember Me">
                <Checkbox input-id="rememberme" binary v-bind="field" />
              </FormFieldWrapper>
            </Field>
            <NuxtLink to="/forgot-password" class="font-medium ml-2 text-right cursor-pointer text-primary">
              Forgot password?
            </NuxtLink>
          </div>
          <Button type="submit" label="Sign In" class="w-full mt-8" :loading="loading" />
        </form>
        <p class="text-surface-900 text-sm font-medium dark:text-surface-0 mt-5">
          Didn't have account ? <NuxtLink class="text-primary" to="/register">
            Register
          </NuxtLink>
        </p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>