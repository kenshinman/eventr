'use client'
import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

type EventFormProps = {
  userId: string
  type: 'Create' | 'Update'
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const EventForm = ({userId, type}: EventFormProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Username</FormLabel>
              <FormControl>
                <Input placeholder="superuser" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your public profile.
              </FormDescription>
              <FormMessage />
              <FormMessage>{form.formState.errors.username?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid}>
          {type}
        </Button>
      </form>
    </Form>
  )
}

export default EventForm