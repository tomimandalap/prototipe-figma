<template>
  <v-row class="mt-5">
    <v-col md="4">
      <v-card outlined height="100%" class="pa-2">
        <v-card-title>
          <h4 class="font-weight-bold">Temperature</h4>
        </v-card-title>
        <v-card-subtitle>
          <p>28.50 &deg;C</p>
        </v-card-subtitle>
        <div>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            :labels="labels"
            auto-draw
          ></v-sparkline>
        </div>
      </v-card>
    </v-col>
    <v-col md="4">
      <v-card outlined height="100%" class="pa-2">
        <v-card-title>
          <h4 class="font-weight-bold">Humidity</h4>
        </v-card-title>
        <v-card-subtitle>
          <p>70.25 %</p>
        </v-card-subtitle>
        <div>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            :labels="labels"
            auto-draw
          ></v-sparkline>
        </div>
      </v-card>
    </v-col>
    <v-col md="4">
      <v-card outlined height="100%" class="pa-2">
        <v-card-title>
          <h4 class="font-weight-bold text--primary">Intensitas Cahaya</h4>
        </v-card-title>
        <v-card-subtitle>
          <p>100.20 Lux</p>
        </v-card-subtitle>
        <div>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            :labels="labels"
            auto-draw
          ></v-sparkline>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  middleware: 'authenticated',
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
    labels: [
      '0am',
      '2am',
      '4am',
      '6am',
      '8am',
      '10am',
      '12pm',
      '14pm',
      '16pm',
      '18pm',
      '20pm',
      '22pm',
      '24pm',
    ],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
  head() {
    return {
      title: `${
        this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
      }`,
    }
  },
}
</script>
