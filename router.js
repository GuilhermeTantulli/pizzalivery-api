const { log } = require("./server")

const router = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!"
    },
  },
  {
    method: "GET",
    path: "/pizza/sizes",
    handler: (request, h) => {
      return [
        {
          id: "10",
          flavours: 1,
          size: 35,
          slices: 8,
          text: "Grande",
        },
        {
          id: "11",
          flavours: 2,
          size: 35,
          slices: 8,
          text: "Grande",
        },
        {
          id: "20",
          flavours: 1,
          size: 28,
          slices: 4,
          text: "Média",
        },
        {
          id: "21",
          flavours: 2,
          size: 28,
          slices: 4,
          text: "Média",
        },
        {
          id: "30",
          flavours: 1,
          size: 18,
          slices: 1,
          text: "Broto",
        },
        {
          id: "31",
          flavours: 2,
          size: 18,
          slices: 1,
          text: "Broto",
        },
      ]
    },
  },
  {
    method: "GET",
    path: "/pizza/flavours",
    handler: (request, h) => {
      return [
        {
          id: "10",
          image: "http://localhost:5173/src/assets/pizza-flavours/mucarela.png",
          name: "Mussarela",
          description:
            "Muçarela especial fresca, finalizada com orégano e azeitonas portuguesas.",
          price: {
            8: 71,
            4: 35.5,
            1: 18,
          },
        },
        {
          id: "11",
          image: "http://localhost:5173/src/assets/pizza-flavours/frango-catupiry.png",
          name: "Frango com catupiry",
          description:
            "Peito de frango cozido, desfiado e refogado em azeite de oliva e temperos naturais, anéis de cebola sobre base de muçarela especial, bacon em cubos e Catupiry® gratinado. É finalizada com orégano.",
          price: {
            8: 95,
            4: 47.5,
            1: 24,
          },
        },
        {
          id: "12",
          image: "http://localhost:5173/src/assets/pizza-flavours/margherita.png",
          name: "Margherita",
          description:
            "Muçarela especial, muçarela de búfala rasgada, fatias de tomate finalizada com folhas de manjericão orgânico e um fio de azeite aromatizado.",
          price: {
            8: 90,
            4: 45,
            1: 22.5,
          },
        },
        {
          id: "13",
          image: "http://localhost:5173/src/assets/pizza-flavours/portuguesa.png",
          name: "Portuguesa",
          description:
            "Clássica pizza, leva presunto magro, cebola, palmito e ervilha sobre base de muçarela fresca. Finalizada com cobertura de ovos, orégano e azeitonas portuguesas. ",
          price: {
            8: 93,
            4: 46.5,
            1: 23.5,
          },
        },
      ]
    },
  },
  {
    method: "GET",
    path: "/payment/options",
    handler: (request, h) => {
      return [
        { id: "20", value: 1, text: "Cartão de crédito" },
        { id: "21", value: 2, text: "Cartão de débito" },
        { id: "22", value: 3, text: "Vale refeição" },
        { id: "23", value: 4, text: "PIX" },
      ]
    },
  },
  {
    method: "POST",
    path: "/order/create_order",
    handler: function (request, h) {
      const payload = request.payload
      const response = {
        orderId: 756,
        created_at: new Date(),
        message: "Pedido criado com sucesso",
      }
      return response
    },
  },
]

module.exports = router