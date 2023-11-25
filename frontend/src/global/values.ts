import { createSignal } from 'solid-js'

export const [currentExpandedVideo, setCurrentExpandedVideo] = createSignal('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z')
export const [showModal, setShowModal] = createSignal(false)
