import { Router } from 'express';
import { SayHello } from '../src/handlers/SayHello'

const router: Router = Router({mergeParams: true});

router.route('/')
  .get(
    SayHello
  )

export const VesoRouter: Router = router;