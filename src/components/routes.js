import AppForm from '@/components/AppForm'
import StarWars from '@/services/StarWars'

export default [
  {
    path: '/',
    component: AppForm,
    props: () => ({
        message: 'Danado',
        service: StarWars
    })
  },
  {
    path: '/dashboard',
    component: AppForm,
    props: () => ({
        message: 'Caba maxo',
        service: StarWars
    })
  }
]
