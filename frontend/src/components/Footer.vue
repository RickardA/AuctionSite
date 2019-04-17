<template>
    <v-footer dark height="auto">
        <v-card flat tile class="indigo lighten-1 white--text text-xs-center flex">
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>

                    <v-flex xs6>
                        <v-card-text>

                            <p>Contact: info@auctionsite.com</p>

                        </v-card-text>
                    </v-flex>
                    <v-flex xs6>
                        <v-card-text>

                            <v-btn class="mx-3" dark small icon>
                                <font-awesome-icon size="2x" :icon="['fab', 'twitter']" />
                            </v-btn>
                            <v-btn class="mx-3" dark small icon>
                                <font-awesome-icon size="2x" :icon="['fab', 'facebook']" />
                            </v-btn>
                            <v-btn class="mx-3" dark small icon>
                                <font-awesome-icon size="2x" :icon="['fab', 'pinterest']" />
                            </v-btn>
                            <v-btn class="mx-3" dark small icon>
                                <font-awesome-icon size="2x" :icon="['fab', 'instagram']" />
                            </v-btn>

                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-divider></v-divider>
            <v-card-text class="white--text text-center">
                &copy;2019 - <strong>Auction Site</strong>
            </v-card-text>

        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
        })
    }
</script>

<style>
</style>