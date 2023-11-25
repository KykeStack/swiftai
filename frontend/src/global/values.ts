import { createSignal } from 'solid-js'

export const [currentExpandedVideo, setCurrentExpandedVideo] = createSignal('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/output.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL291dHB1dC5tcDQiLCJpYXQiOjE3MDA5MTY0MTYsImV4cCI6MTcxMzg3NjQxNn0.Ao6rstHzI-ArE9s84RGBgl6wWnV5S4o10Fo0SRIucqI&t=2023-11-25T12%3A46%3A57.601Z')
export const [showModal, setShowModal] = createSignal(false)
